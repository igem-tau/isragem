import VideoCard from "../VideoCard";
import styles from "./Tutorials.module.css";

export default function Tutorials({ title, videos, direction = "ltr" }) {
  return (
    <section className={styles.container} style={{ direction }} id='tutorials'>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.videos}>
        {videos &&
          videos.map((video, index) => (
            <VideoCard
              key={index}
              text={video.text}
              videoSrc={video.src}
              direction={direction}
              className={styles.video}
              textClassName={styles.video_text}
              textAtTop
              isAccent={index % 2 == 1}
            />
          ))}
      </div>
    </section>
  );
}
