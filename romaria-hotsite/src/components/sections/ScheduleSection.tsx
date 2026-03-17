import { dateScheduleEntries, fixedScheduleGroups, scheduleCategories, scheduleDays } from "@/data/romaria-content";
import { CategoryFilter } from "@/types/landing";
import styles from "@/app/page.module.css";

type ScheduleSectionProps = {
  selectedCategory: CategoryFilter;
  selectedDate: string;
  onSelectCategory: (category: CategoryFilter) => void;
  onSelectDate: (date: string) => void;
};

export default function ScheduleSection({ selectedCategory, selectedDate, onSelectCategory, onSelectDate }: ScheduleSectionProps) {
  const filtered = dateScheduleEntries.filter((entry) => {
    const categoryMatch = selectedCategory === "all" || entry.category === selectedCategory;
    const dateMatch = selectedDate === "all" || entry.dateId === selectedDate;
    const hideDailyOnSpecificDate = selectedDate !== "all" && entry.category === "daily";
    return categoryMatch && dateMatch && !hideDailyOnSpecificDate;
  });

  const grouped = filtered.reduce<Record<string, typeof filtered>>((acc, entry) => {
    const key = entry.dateLabel ?? entry.dateId ?? "Sem data";
    acc[key] ??= [];
    acc[key].push(entry);
    return acc;
  }, {});

  const visibleDateGroups = Object.fromEntries(
    Object.entries(grouped).map(([key, value]) => [key, value.slice(0, 3)])
  );

  return (
    <section className={styles.scheduleSection} id="programacao" data-reveal>
      <img className={`${styles.arch} ${styles.archLeft}`} src="/figma-assets/arco.png" alt="" aria-hidden="true" />
      <img className={`${styles.arch} ${styles.archRight}`} src="/figma-assets/arco.png" alt="" aria-hidden="true" />
      <div className={styles.container}>
        <h2 className={styles.sectionTitleDark}>PROGRAMAÇÃO DIÁRIA</h2>

        <div className={styles.filterRow}>
          {scheduleCategories.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterPill} ${selectedCategory === filter.id ? styles.filterPillActive : ""}`}
              type="button"
              onClick={() => onSelectCategory(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.daysScroller}>
          {scheduleDays.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.dayCard} ${selectedDate === item.id ? styles.dayCardActive : ""}`}
              onClick={() => onSelectDate(item.id)}
            >
              <span>{item.weekDay}</span>
              <strong>{item.label}</strong>
              <span>{item.month}</span>
            </button>
          ))}
        </div>

        {selectedDate === "all" && (selectedCategory === "all" || selectedCategory === "daily" || selectedCategory === "missas") ? (
          <div className={styles.scheduleBlocks}>
            {fixedScheduleGroups
              .map((group) => ({
                ...group,
                items: group.items
                  .filter((item) => selectedCategory === "all" || item.category === selectedCategory)
                  .slice(0, 3),
              }))
              .filter((group) => group.items.length > 0)
              .map((group) => (
                <section className={styles.scheduleBlock} key={group.id}>
                  <h3>{group.title}</h3>
                  <div className={styles.scheduleList}>
                    {group.items.map((item) => (
                      <article className={styles.scheduleItem} key={item.id}>
                        <p className={styles.scheduleTime}>{item.time}</p>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.location}</p>
                          {item.details ? <small>{item.details}</small> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        ) : null}

        <div className={styles.scheduleBlocks}>
          {Object.entries(visibleDateGroups).map(([group, items]) => (
            <section className={styles.scheduleBlock} key={group}>
              <h3>{group}</h3>
              <div className={styles.scheduleList}>
                {items.map((item) => (
                  <article className={styles.scheduleItem} key={item.id}>
                    <p className={styles.scheduleTime}>{item.time}</p>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.location}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
