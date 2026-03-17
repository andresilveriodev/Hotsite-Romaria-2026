import styles from "@/app/page.module.css";

type CounterBarSectionProps = {
  days: number;
  hours: number;
  minutes: number;
};

export default function CounterBarSection({ days, hours, minutes }: CounterBarSectionProps) {
  const formatValue = (val: number) => val.toString().padStart(2, "0");

  return (
    <section className={styles.counterBar} data-reveal>
      <p>
        FALTAM {days} DIAS {formatValue(hours)}h {formatValue(minutes)}min PARA A ROMARIA 2026
      </p>
    </section>
  );
}
