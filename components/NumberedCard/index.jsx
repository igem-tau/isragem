import Image from "next/image";
import styles from "./NumberedCard.module.css";

export default function NumberedCard({
  number,
  text,
  imagePath,
  imageDescription,
  question,
  answer,
  isAccentColor = false,
}) {
  return (
    <div
      className={`${styles.card} ${isAccentColor ? styles.accent : ""}`}
      number={number}
    >
      <p className={styles.large_text}>{text}</p>
      <Image
        src={imagePath}
        alt={imageDescription}
        width={140}
        height={100}
        className={styles.icon}
      />
      <p className={`${styles.question} ${styles.small_text}`}>{question}</p>
      <p className={styles.small_text}>{answer}</p>
    </div>
  );
}
