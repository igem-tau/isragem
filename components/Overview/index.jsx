import PictureCard from "../PictureCard";
import styles from "./Overview.module.css";

export default function Overview({ title, overviewInfo }) {
  return (
    <section className={styles.container} id='overview'>
      <h2 className={styles.title}>{title}</h2>
      {overviewInfo &&
        overviewInfo
          .slice(0, 1)
          .map((info) => (
            <PictureCard
              text={info.text}
              imagePath={info.imagePath}
              imageDescription={info.imageDescription}
              isAccent={info.isAccent}
              className={info.className}
              imageClassName={info.imageClassName}
            />
          ))}

      <div className={styles.cards}>
        {overviewInfo &&
          overviewInfo
            .slice(1)
            .map((info) => (
              <PictureCard
                text={info.text}
                imagePath={info.imagePath}
                imageDescription={info.imageDescription}
                isAccent={info.isAccent}
                className={info.className}
                imageClassName={info.imageClassName}
              />
            ))}
      </div>
    </section>
  );
}
