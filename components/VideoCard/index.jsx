import Card from "../Card";
import styles from "./VideoCard.module.css";

export default function VideoCard({
  text,
  videoSrc,
  videoTitle = "YouTube video player",
  textClassName = "",
  textAtTop = false,
  direction = "ltr",
  className,
  ...props
}) {
  return (
    <Card className={className} {...props}>
      {text && textAtTop && (
        <p
          className={`${styles.text} ${styles.text_top} ${textClassName}`}
          style={{ direction }}
        >
          {text}
        </p>
      )}
      <iframe
        width='560'
        height='315'
        src={videoSrc}
        title={videoTitle}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
        className={styles.video}
      />
      {text && !textAtTop && (
        <p className={`${styles.text} ${styles.text_bottom} ${textClassName}`}>
          {text}
        </p>
      )}
    </Card>
  );
}
