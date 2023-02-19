import { useEffect, useState } from "react";
import styles from "./CountDown.module.css";

function getTimeLeft(targetDate) {
  const MILLISECONDS_IN_SECOND = 1000;
  const MILLISECONDS_IN_MINUTE = 60 * MILLISECONDS_IN_SECOND;
  const MILLISECONDS_IN_HOUR = 60 * MILLISECONDS_IN_MINUTE;
  const MILLISECONDS_IN_DAY = 24 * MILLISECONDS_IN_HOUR;

  const now = Date.now();
  const diff =
    targetDate -
    now +
    MILLISECONDS_IN_MINUTE * new Date().getTimezoneOffset("IL");

  const days = Math.floor(diff / MILLISECONDS_IN_DAY);
  const hours = Math.floor((diff % MILLISECONDS_IN_DAY) / MILLISECONDS_IN_HOUR);
  const minutes = Math.floor(
    (diff % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE
  );
  const seconds = Math.floor(
    (diff % MILLISECONDS_IN_MINUTE) / MILLISECONDS_IN_SECOND
  );

  // console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

function TimeUnit({ time, text, isLast = false }) {
  return (
    <div className={styles.time_unit}>
      <h1
        className={`${styles.time} ${styles.time_spacing} ${
          isLast ? styles.last : ""
        }`}
      >
        {time}
      </h1>
      <h3 className={styles.time_spacing}>{text}</h3>
    </div>
  );
}

export default function CountDown({
  targetDate,
  title,
  daysText = "days",
  hoursText = "hours",
  minutesText = "minutes",
  secondsText = "seconds",
}) {
  const [days, setDays] = useState("--");
  const [hours, setHours] = useState("--");
  const [minutes, setMinutes] = useState("--");
  const [seconds, setSeconds] = useState("--");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const {
        days: newDays,
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      } = getTimeLeft(targetDate);
      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.times}>
        <TimeUnit time={days} text={daysText} />
        <TimeUnit time={hours} text={hoursText} />
        <TimeUnit time={minutes} text={minutesText} />
        <TimeUnit time={seconds} text={secondsText} isLast={true} />
      </div>
    </div>
  );
}
