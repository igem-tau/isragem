import Image from "next/image";
import Banner from "../Banner";
import Button from "../Button";
import CountDown from "../CountDown";
import styles from "./Hero.module.css";

export default function Hero({ targetDate }) {
  return (
    <section className={styles.hero}>
      <Image
        src='/ISRAGEM_Logo.svg'
        alt='ISRAGEM I'
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
      <Button
        text='הירשמו עכשיו'
        className={styles.button}
        target='#subscription'
      />
      <Banner
        className={styles.banner}
        subscriptionEndDate='10.3'
        subscriptionEndText='סגירת ההרשמה'
        competitionStartDate='13.3'
        competitionStartText='יום הזנקת התחרות'
        finalDate='27.6'
        finalText='אירוע הגמר'
      />
    </section>
  );
}
