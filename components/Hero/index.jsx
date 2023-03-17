import Image from "next/image";
import Banner from "../Banner";
import Button from "../Button";
import CountDown from "../CountDown";
import styles from "./Hero.module.css";

export default function Hero({
  targetDate,
  countDownText,
  subscriptionButtonText,
  bannerTexts,
  direction = "ltr",
}) {
  return (
    <section className={styles.hero} id='home'>
      <Image
        src='/ISRAGEM_Logo.png'
        alt='ISRAGEM I'
        width={480}
        height={107}
        priority
        className={styles.title}
      />
      <CountDown
        targetDate={targetDate}
        title={countDownText.title}
        daysText={countDownText.daysText}
        hoursText={countDownText.hoursText}
        minutesText={countDownText.minutesText}
        secondsText={countDownText.secondsText}
        direction={direction}
      />
      <Button
        text={subscriptionButtonText}
        className={styles.button}
        target='#subscription'
      />
      <Banner
        className={styles.banner}
        competitionStartDate={bannerTexts.competitionStartDate}
        competitionStartText={bannerTexts.competitionStartText}
        videoSubmissionEndDate={bannerTexts.videoSubmissionEndDate}
        videoSubmissionEndText={bannerTexts.videoSubmissionEndText}
        finalDate={bannerTexts.finalDate}
        finalText={bannerTexts.finalText}
        direction={direction}
      />
    </section>
  );
}
