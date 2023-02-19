import VideoCard from "../VideoCard";
import styles from "./Examples.module.css";

export default function Examples({ examples }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>דוגמאות לשימוש בביולוגיה סינטטית</h2>
      <div className={styles.cards}>
        {examples &&
          examples.map((example) => (
            <VideoCard
              text={example.text}
              videoSrc={example.videoSrc}
              videoTitle={example.videoTitle}
              className={styles.card}
            />
          ))}
      </div>
    </section>
  );
}
