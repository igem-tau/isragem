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
  link,
  linkText,
}) {
  return (
    <div
      className={`${styles.card} ${isAccentColor ? styles.accent : ""}`}
      number={number}
    >
      <br/>
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
      <p className={styles.link}> <a href={link} target="_blank">{linkText}</a></p>
    </div>
  );
}
