import PictureCard from "../PictureCard";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.container} id='overview'>
      <h2 className={styles.title}>על קצה המזלג</h2>
      <PictureCard
        text='פרויקט ה- iGEM הינו פרויקט ייחודי, בו סטודנטים מאוניברסיטאות מכל העולם מתבקשים ליזום פרויקט מחקר בתחום הביולוגיה הסינטטית, ולבסוף להציג את תוצאותיהם בתחרות בינלאומית המתקיימת מדי שנה בפריז. הרעיון מאחורי תחרות הISRAGEM הוא לאפשר לתלמידי תיכון בישראל להתנסות בחוויה דומה.'
        imagePath='/iGem_light_Logo.svg'
        imageDescription='iGem logo'
        className={`${styles.large_card} ${styles.single_card}`}
        imageClassName={styles.large_image}
      />
      <div className={styles.cards}>
        <PictureCard
          text='תחום הביולוגיה הסינטטית הוא תחום מולטי-דיסיפילנרי וצעיר המשלב את עולם ההנדסה ומדעי המחשב עם מדעי החיים. הביולוגיה הסינטטית משלבת רעיונות ועקרונות מהעולמות השונים במטרה לתכנן ולבנות רכיבים או מערכות שלמות שלא ניתן למצוא כדוגמתם בטבע.'
          imagePath='/left_tip_image.svg'
          imageDescription='iGem logo'
          isAccent
          className={styles.card}
          imageClassName={styles.medium_image}
        />
        <PictureCard
          text='״ביולוגיה סינטטית היא אחד התחומים הטכנולוגיים החמים והמבטיחים כיום בעולם בכלל ובישראל בפרט. מדובר בגישה המשמישה טכנולוגיות קצה שונות ומגוונות, כדי לבצע מניפולציות במערכות חיות ליישומים רבים, המשליכים על כל תחום אפשרי: מבריאות, חקלאות, מזון, סביבה, חומרים ועד ביטחון״ 
          (רשות החדשנות).'
          imagePath='/right_tip_image.svg'
          imageDescription='iGem logo'
          isAccent
          className={styles.card}
          imageClassName={styles.medium_image}
        />
      </div>
    </section>
  );
}
