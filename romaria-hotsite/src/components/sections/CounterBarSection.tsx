import { useEffect, useState, type CSSProperties } from "react";

import styles from "@/app/page.module.css";
import { countdownInitialDays, countdownTargetDate } from "@/data/romaria-content";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

export default function CounterBarSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(countdownTargetDate);
      const now = new Date();
      const diffMs = targetDate.getTime() - now.getTime();

      if (diffMs <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
        return;
      }

      const days = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
      const hours = Math.floor((diffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((diffMs % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diffMs % (60 * 1000)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const timer = window.setInterval(calculateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds, isFinished } = timeLeft;
  const formatValue = (value: number, pad = true) => {
    if (!pad) return value.toString();
    return value.toString().padStart(2, "0");
  };

  const dayProgress = Math.max(0, Math.min(1, (days * 86400 + hours * 3600 + minutes * 60 + seconds) / (countdownInitialDays * 86400)));
  const hourProgress = Math.max(0, Math.min(1, (hours * 3600 + minutes * 60 + seconds) / 86400));
  const minuteProgress = Math.max(0, Math.min(1, seconds / 60));

  const ringItems = [
    {
      value: formatValue(days, false),
      label: "Dias",
      progress: dayProgress,
    },
    {
      value: formatValue(hours),
      label: "Horas",
      progress: hourProgress,
    },
    {
      value: formatValue(minutes),
      label: "Minutos",
      progress: minuteProgress,
    },
  ];

  return (
    <section className={styles.counterBar} data-reveal>
      <div className={styles.counterPanel}>
        {isFinished ? (
          <div className={styles.counterWelcome}>
            <p className={styles.counterIntro}>Agora e tempo de celebrar</p>
            <h2>Bem vindo a Romaria 2026</h2>
          </div>
        ) : (
          <>
            <p className={styles.counterIntro}>Faltam</p>

            <div className={styles.counterUnits}>
              {ringItems.map((item) => (
                <div className={styles.counterUnit} key={item.label}>
                  <div
                    className={styles.counterRing}
                    style={
                      {
                        "--progress": `${item.progress * 360}deg`,
                      } as CSSProperties
                    }
                  >
                    <div className={styles.counterRingInner}>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                  <span className={styles.counterUnitLabel}>{item.label}</span>
                </div>
              ))}
            </div>

            <p className={styles.counterTitle}>ROMARIA 2026</p>
          </>
        )}
      </div>
    </section>
  );
}
