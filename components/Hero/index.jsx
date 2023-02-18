import Image from "next/image";
import Button from "../Button";
import CountDown from "../CountDown";
import styles from "./Hero.module.css";

export default function Hero({ targetDate }) {
  return (
    <div className={styles.hero}>
      <Image
        src='/ISRAGEM_Logo.svg'
        width={480}
        height={107}
        priority
        className={styles.title}
      />
      <CountDown
        targetDate={targetDate}
        title='ההרשמה תיסגר בעוד:'
        daysText='ימים'
        hoursText='שעות'
        minutesText='דקות'
        secondsText='שניות'
      />
      <Button text='הרשמו עכשיו' className={styles.button} target='#' />
    </div>
  );
}
