import Card from "../Card";
import styles from "./VideoCard.module.css";

export default function VideoCard({
  text,
  videoSrc,
  videoTitle = "YouTube video player",
  className,
  ...props
}) {
  return (
    <Card className={className} {...props}>
      <iframe
        width='560'
        height='315'
        src={videoSrc}
        title={videoTitle}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      />
      <p className={styles.text}>{text}</p>
    </Card>
  );
}
