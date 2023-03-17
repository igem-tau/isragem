import VideoCard from "../VideoCard";
import styles from "./Tutorials.module.css";

export default function Tutorials({
  title,
  videos,
  videoInstructionsText,
  videoInstructionsLink,
  direction = "ltr",
}) {
  return (
    <section className={styles.container} style={{ direction }}>
      <span className={styles.nav_target} id='tutorials' />
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
      <p className={styles.instructions_link}>
        <a href={videoInstructionsLink} target='_blank'>
          {videoInstructionsText}
        </a>
      </p>
    </section>
  );
}
