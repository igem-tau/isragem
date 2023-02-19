import Image from "next/image";
import Card from "../Card";
import styles from "./PictureCard.module.css";

export default function PictureCard({
  text,
  imagePath,
  imageDescription,
  imageWidth,
  className = "",
  imageClassName = "",
  ...props
}) {
  return (
    <Card className={`${styles.card} ${className}`} {...props}>
      <p className={styles.text}>{text}</p>
      <Image
        src={imagePath}
        alt={imageDescription}
        width={480}
        height={285}
        className={`${styles.image} ${imageClassName}`}
      />
    </Card>
  );
}
