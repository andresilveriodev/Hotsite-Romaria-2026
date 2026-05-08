"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { allScheduleEntries, scheduleCategories, scheduleDays } from "@/data/romaria-content";
import { CategoryFilter } from "@/types/landing";
import styles from "./ScheduleSection.module.css";

type ScheduleSectionProps = {
  selectedCategory: CategoryFilter;
  selectedDate: string;
  onSelectCategory: (category: CategoryFilter) => void;
  onSelectDate: (date: string) => void;
};

export default function ScheduleSection({ selectedCategory, selectedDate, onSelectCategory, onSelectDate }: ScheduleSectionProps) {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    setVisibleCount(5);
  }, [selectedCategory, selectedDate]);

  const filtered = allScheduleEntries.filter((entry) => {
    if (entry.category !== selectedCategory) {
      return false;
    }

    if (selectedCategory === "daily" || selectedCategory === "festa") {
      return true;
    }

    if (selectedDate !== "all") {
      const entryDateId = entry.date ? entry.date.replace("/", "-") : null;
      if (entryDateId !== selectedDate) {
        return false;
      }
    }

    return true;
  });

  const isDaily = selectedCategory === "daily";
  const visibleItems = isDaily ? filtered.slice(0, visibleCount) : filtered;
  const hasMore = isDaily && visibleItems.length < filtered.length;

  const grouped = visibleItems.reduce<Record<string, typeof filtered>>((acc, entry) => {
    let key = "Programação Diária";
    if (entry.date && entry.day) {
      key = `${entry.date} - ${entry.day}`;
    } else if (entry.date) {
      key = entry.date;
    }
    acc[key] ??= [];
    acc[key].push(entry);
    return acc;
  }, {});

  return (
    <section className={styles.scheduleSection} id="programacao" data-reveal>
      <Image className={`${styles.arch} ${styles.archLeft}`} src="/figma-assets/arco.png" alt="" aria-hidden="true" width={160} height={300} />
      <Image className={`${styles.arch} ${styles.archRight}`} src="/figma-assets/arco.png" alt="" aria-hidden="true" width={160} height={300} />
      <div className={styles.container}>
        <h2 className={styles.sectionTitleDark}>PROGRAMAÇÃO DA ROMARIA</h2>

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

        {selectedCategory !== "daily" && selectedCategory !== "festa" && (
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
        )}

        <div className={styles.scheduleBlocks}>
          {Object.entries(grouped).map(([group, items]) => (
            <section className={styles.scheduleBlock} key={group}>
              <h3>{group}</h3>
              <div className={styles.scheduleList}>
                {items.map((item) => (
                  <article className={styles.scheduleItem} key={item.id}>
                    <p className={styles.scheduleTime}>{item.time}</p>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.location}</p>
                      {item.details && <small>{item.details}</small>}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {isDaily && filtered.length > 5 && (
          <div className={styles.loadMoreContainer}>
            <button 
              className={styles.loadMoreButton} 
              onClick={() => {
                if (hasMore) {
                  setVisibleCount((prev) => prev + 5);
                } else {
                  setVisibleCount(5);
                  // Opcional: fazer rolagem suave para o topo da seção
                  document.getElementById("programacao")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              type="button"
            >
              {hasMore ? (
                <>
                  Mostrar mais
                  <svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </>
              ) : (
                <>
                  Recolher
                  <svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
