import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import CompetitionSteps from "@/components/CompetitionSteps";
import Subscription from "@/components/Subscription";
import Overview from "@/components/Overview";
import Examples from "@/components/Examples";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import overviewStyles from "../../components/Overview/Overview.module.css";

const targetDate = new Date("2023-03-10T23:59:59.999Z").getTime();
const countDownText = {
  title: "subscription end in:",
  daysText: "days",
  hoursText: "hours",
  minutesText: "minutes",
  secondsText: "seconds",
};
const subscriptionButtonText = "Subscribe Now";
const bannerTexts = {
  subscriptionEndDate: "10.3",
  subscriptionEndText: "subscription end",
  competitionStartDate: "13.3",
  competitionStartText: "competition start",
  finalDate: "27.6",
  finalText: "final event",
};

const competitionSteps = [
  {
    text: "אתם תתחרו בקבוצות של עד 10 תלמידים, עם החברים שלכם לכיתה. ביחד תבחנו בעיות אמיתיות מעולמות הביוטק, תחקרו את הרקע המדעי שדרוש להבנת הבעיה ותגבשו ביחד פתרון שמשתמש בכלים חדשניים מעולם הביולוגיה הסינתטית אליהם תחשפו במהלך התחרות.",
    imagePath: "/1st_step_icon.svg",
    imageDescription: "אייקון של זכוכית מגדלת",
    question: "מה מגדיר פתרון טוב?",
    answer: "פתרון טוב צריך להיות ישים, חדשני, בטוח ובעל השפעה משמעותית.",
    isAccentColor: true,
  },
  {
    text: "לאחר שתחשבו על פתרון תצטרכו להכין סרטון באורך שלא עולה על 3 דקות בו תציגו את עצמכם, את הבעיה שבחרתם ואת הפתרון שחשבתם עליו. זה המקום להיות יצירתיים!",
    imagePath: "/2nd_step_icon.svg",
    imageDescription: "אייקון של זכוכית מגדלת",
    question: "מה מגדיר סרטון טוב?",
    answer:
      "סרטון טוב צריך להעביר את המסר בצורה ברורה פשוטה וחד משמעית. הסרטון צריך להיות להתאים לקהל היעד אליו הוא פונה וחייב לכלול את הרקע הדרוש להבנתו. בנוסף, הסרטון צריך לשמור על רמת העניין של הצופה.",
  },
  {
    text: "הקבוצות שיכינו את הסרטונים שעונים בצורה הכי טובה על הדרישות יעלו לגמר שיתקיים ב27.6 באוניברסיטת תל אביב, בו יועצים מכל התחומים (תעשייה, אקדמיה ומשרד החינוך) יעזרו לכם לפתח את הרעיון ולהציג אותו מול פאנל השופטים שלנו.",
    imagePath: "/3rd_step_icon.svg",
    imageDescription: "אייקון של זכוכית מגדלת",
    question: "הקבוצה המנצחת תזכה בפרס שווה!",
    answer: "עדיין לא נרשמתם? מהרו לעשות זאת עכשיו.",
    isAccentColor: true,
  },
];

const formSrc =
  "https://docs.google.com/forms/d/e/1FAIpQLSdvl8ItQhhnjnjDb7OuWi9JWdOdBq91NhZgR9A9Xsw6QyKtQw/viewform?embedded=true";

const overviewInfo = [
  {
    text: "פרויקט ה- iGEM הינו פרויקט ייחודי, בו סטודנטים מאוניברסיטאות מכל העולם מתבקשים ליזום פרויקט מחקר בתחום הביולוגיה הסינתטית, ולבסוף להציג את תוצאותיהם בתחרות בינלאומית המתקיימת מדי שנה בפריז. הרעיון מאחורי תחרות הISRAGEM הוא לאפשר לתלמידי תיכון בישראל להתנסות בחוויה דומה.",
    imagePath: "/iGem_light_Logo.svg",
    imageDescription: "iGem logo",
    className: `${overviewStyles.single_card}`,
    imageClassName: overviewStyles.small_image,
  },
  {
    text: "תחום הביולוגיה הסינתטית הוא תחום מולטי-דיסיפילנרי וצעיר המשלב את עולם ההנדסה ומדעי המחשב עם מדעי החיים. הביולוגיה הסינתטית משלבת רעיונות ועקרונות מהעולמות השונים במטרה לתכנן ולבנות רכיבים או מערכות שלמות שלא ניתן למצוא כדוגמתם בטבע.",
    imagePath: "/left_tip_image.svg",
    imageDescription: "iGem logo",
    isAccent: true,
    className: overviewStyles.card,
    imageClassName: overviewStyles.medium_image,
  },
  {
    text: "״ביולוגיה סינתטית היא אחד התחומים הטכנולוגיים החמים והמבטיחים כיום בעולם בכלל ובישראל בפרט. מדובר בגישה המשמישה טכנולוגיות קצה שונות ומגוונות, כדי לבצע מניפולציות במערכות חיות ליישומים רבים, המשליכים על כל תחום אפשרי: מבריאות, חקלאות, מזון, סביבה, חומרים ועד ביטחון״ (רשות החדשנות).",
    imagePath: "/right_tip_image.svg",
    imageDescription: "iGem logo",
    isAccent: true,
    className: overviewStyles.card,
    imageClassName: overviewStyles.medium_image,
  },
];

const examples = [
  {
    text: "הכירו את ColorFix, קבוצת iGEM לשעבר שהפכה את הרעיון שלה לחברת סטארטאפ מצליחה. הקבוצה זיהתה את החסרונות הרבים בייצור צבעים בתעשיית הטקסטיל, והצליחה להשתמש בכלים של ביולוגיה סינתטית כדי לייצר צבעים באופן ידידותי לסביבה, חסכוני וזול.",
    videoSrc: "https://player.vimeo.com/video/622253519",
    videoTitle: "ColorFix project from iGem",
  },
  {
    text: "פרופ׳ עודד סושיוב מהפקולטה לחקלאות באוניברסיטה העברית משתמש בכלים של ביולוגיה סינתטית כדי להפיק בצמחים חלבונים שונים ומגוונים, בעלי ערך רב לתעשייה, שמקורם מבעלי חיים. פרופי סושיוב מדגים את היכולות הבלתי מוגבלות של השימוש בכלים של ביולוגיה סינתטית למטרות שונות ומגוונות.",
    videoSrc: "https://www.youtube.com/embed/oorrsuCMIRc?start=589",
    videoTitle: "synthetic biology usage for protein production",
  },
];

const credits = [
  "Designed by Cheli Saban",
  "Developed by David Haggiag for iGEM TAU 2023",
  "Pictures and icons Designed by ",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Isra-Gem</title>
        <meta
          name='description'
          content='Tel-Aviv University synthetic biology competition'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation
        homeText='Home'
        competitionStepsText='Competition Steps'
        subscriptionText='Subscribe'
        overviewText='Overview'
      />
      <main className={styles.main}>
        <Header otherLanguagePath='/he' />
        <Hero
          targetDate={targetDate}
          countDownText={countDownText}
          subscriptionButtonText={subscriptionButtonText}
          bannerTexts={bannerTexts}
        />
        <CompetitionSteps title='Competition Steps' steps={competitionSteps} />
        <Subscription title='Subscribe Now' formSrc={formSrc} />
        <Overview title='Overview' overviewInfo={overviewInfo} />
        <Examples title='Examples of Synthetic Biology' examples={examples} />
        <Footer credits={credits} />
      </main>
    </>
  );
}
