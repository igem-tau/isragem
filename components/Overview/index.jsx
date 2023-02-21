import PictureCard from "../PictureCard";
import styles from "./Overview.module.css";

export default function Overview({ title, overviewInfo, direction = "ltr" }) {
  return (
    <section className={styles.container} id='overview'>
      <h2 className={styles.title}>{title}</h2>
      {overviewInfo &&
        overviewInfo
          .slice(0, 1)
          .map((info, index) => (
            <PictureCard
              key={index}
              text={info.text}
              imagePath={info.imagePath}
              imageDescription={info.imageDescription}
              isAccent={info.isAccent}
              className={info.className}
              imageClassName={info.imageClassName}
              direction={direction}
            />
          ))}

      <div className={styles.cards} style={{ direction }}>
        {overviewInfo &&
          overviewInfo
            .slice(1)
            .map((info, index) => (
              <PictureCard
                key={index + 1}
                text={info.text}
                imagePath={info.imagePath}
                imageDescription={info.imageDescription}
                isAccent={info.isAccent}
                className={info.className}
                imageClassName={info.imageClassName}
                direction={direction}
              />
            ))}
      </div>
    </section>
  );
}
