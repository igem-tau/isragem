import NumberedCard from "../NumberedCard";
import styles from "./CompetitionSteps.module.css";

export default function CompetitionSteps() {
  return (
    <section className={styles.container} id='competition_steps'>
      <h2>שלבי התחרות</h2>
      <div className={styles.steps}>
        <NumberedCard
          number={1}
          text='אתם תתחרו בקבוצות של עד 10 תלמידים, עם החברים שלכם לכיתה. ביחד תבחנו בעיות אמיתיות מעולמות הביוטק, תחקרו את הרקע המדעי שדרוש להבנת הבעיה ותגבשו ביחד פתרון שמשתמש בכלים חדשניים מעולם הביולוגיה הסינטטית אליהם תחשפו במהלך התחרות.'
          imagePath='/1st_step_icon.svg'
          imageDescription='אייקון של זכוכית מגדלת'
          question='מה מגדיר פתרון טוב?'
          answer='פתרון טוב צריך להיות ישים, חדשני, בטוח ובעל השפעה משמעותית.'
        />
        <NumberedCard
          number={2}
          text='לאחר שתחשבו על פתרון תצטרכו להכין סרטון באורך שלא עולה על 3 דקות בו תציגו את עצמכם, את הבעיה שבחרתם ואת הפתרון שחשבתם עליו. 
          זה המקום להיות יצירתיים!'
          imagePath='/2nd_step_icon.svg'
          imageDescription='אייקון של זכוכית מגדלת'
          question='מה מגדיר סרטון טוב?'
          answer='סרטון טוב צריך להעביר את המסר בצורה ברורה פשוטה וחד משמעית. הסרטון צריך להיות להתאים לקהל היעד אליו הוא פונה וחייב לכלול את הרקע הדרוש להבנתו. בנוסף, הסרטון צריך לשמור על רמת העניין של הצופה.'
          isAccentColor
        />
        <NumberedCard
          number={3}
          text='הקבוצות שיכינו את הסרטונים שעונים בצורה הכי טובה על הדרישות יעלו לגמר שיתקיים ב27.6 באוניברסיטת תל אביב, בו יועצים מכל התחומים (תעשייה, אקדמיה ומשרד החינוך) יעזרו לכם לפתח את הרעיון ולהציג אותו מול פאנל השופטים שלנו.'
          imagePath='/3rd_step_icon.svg'
          imageDescription='אייקון של זכוכית מגדלת'
          question='הקבוצה המנצחת תזכה בפרס שווה!'
          answer='עדיין לא נרשמתם? מהרו לעשות זאת עכשיו.'
        />
      </div>
    </section>
  );
}
