import VideoCard from "../VideoCard";
import styles from "./Examples.module.css";

export default function Examples() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>דוגמאות לשימוש בביולוגיה סינטטית</h2>
      <div className={styles.cards}>
        <VideoCard
          text='הכירו את ColorFix, קבוצת iGEM לשעבר שהפכה את הרעיון שלה לחברת סטארטאפ מצליחה.
          הקבוצה זיהתה את החסרונות הרבים בייצור צבעים בתעשיית הטקסטיל, והצליחה להשתמש בכלים של ביולוגיה סינטטית כדי לייצר צבעים באופן ידידותי לסביבה, חסכוני וזול.'
          videoSrc='https://player.vimeo.com/video/622253519'
          videoTitle='ColorFix project from iGem'
          className={styles.card}
        />
        <VideoCard
          text='פרופ׳ עודד סושיוב מהפקולטה לחקלאות באוניברסיטה העברית משתמש בכלים של ביולוגיה סינטטית כדי להפיק בצמחים חלבונים שונים ומגוונים, בעלי ערך רב לתעשייה, שמקורם מבעלי חיים. פרופי סושיוב מדגים את היכולות הבלתי מוגבלות של השימוש בכלים של ביולוגיה סינטטית למטרות שונות ומגוונות.'
          videoSrc='https://www.youtube.com/embed/oorrsuCMIRc?start=589'
          videoTitle='synthetic biology usage for protein production'
          className={styles.card}
        />
      </div>
    </section>
  );
}
