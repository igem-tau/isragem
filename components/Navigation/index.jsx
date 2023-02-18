import Image from "next/image";
import styles from "./Navigation.module.css";

export default function Navigation({
  homeText,
  competitionStepsText,
  subscriptionText,
  overviewText,
}) {
  return (
    <nav className={styles.navigation} id='navigation'>
      <Image
        src='/ISRAGEM_Logo.svg'
        alt='ISRAGEM I'
        width={480}
        height={107}
        priority
        className={styles.title}
      />
      <a href='#home'>
        <h2>{homeText}</h2>
      </a>
      <a href='#competition_steps'>
        <h2>{competitionStepsText}</h2>
      </a>
      <a href='#subscription'>
        <h2>{subscriptionText}</h2>
      </a>
      <a href='#overview'>
        <h2>{overviewText}</h2>
      </a>
    </nav>
  );
}
