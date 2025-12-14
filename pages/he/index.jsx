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
import { targetDate } from "@/constants";
import Tutorials from "@/components/Tutorials";

const direction = "rtl";

const countDownText = {
  title: "זמן שנותר לגמר הגדול:",
  daysText: "ימים",
  hoursText: "שעות",
  minutesText: "דקות",
  secondsText: "שניות",
};
const subscriptionButtonText = "הירשמו עכשיו";
const bannerTexts = {
  competitionStartDate: "TODO",
  competitionStartText: "יום הזנקת התחרות",
  videoSubmissionEndDate: "TODO",
  videoSubmissionEndText: "הגשת סרטונים",
  finalDate: "TODO",
  finalText: "אירוע הגמר",
};

const competitionSteps = [
  {
    text: "אתם תתחרו בקבוצות של עד 5 תלמידים, עם החברים שלכם לכיתה. ביחד תבחנו בעיות אמיתיות מעולמות הביוטק, תחקרו את הרקע המדעי שדרוש להבנת הבעיה ותגבשו ביחד פתרון שמשתמש בכלים חדשניים מעולם הביולוגיה הסינתטית אליהם תחשפו במהלך התחרות.",
    imagePath: "/1st_step_icon.svg",
    imageDescription: "אייקון של זכוכית מגדלת",
    question: "מה מגדיר פתרון טוב?",
    answer: "פתרון טוב צריך להיות ישים, חדשני, בטוח ובעל השפעה משמעותית.",
    isAccentColor: true,
    link: "https://drive.google.com/file/d/1unqdCcZ4eZD0R8_qd_7g8mSOYZgnfIji/view",
    linkText: "לחצו כאן להסבר מפורט על דרישות התחרות",
  },
  {
    text: "לאחר שתחשבו על פתרון תצטרכו להכין סרטון באורך שלא עולה על 2 דקות בו תציגו את עצמכם, את הבעיה שבחרתם ואת הפתרון שחשבתם עליו. זה המקום להיות יצירתיים!",
    imagePath: "/2nd_step_icon.svg",
    imageDescription: "אייקון של סרטון",
    question: "מה מגדיר סרטון טוב?",
    answer:
      "סרטון טוב צריך להעביר את המסר בצורה ברורה פשוטה וחד משמעית. הסרטון צריך להיות להתאים לקהל היעד אליו הוא פונה וחייב לכלול את הרקע הדרוש להבנתו. בנוסף, הסרטון צריך לשמור על רמת העניין של הצופה.",
    link: "https://drive.google.com/file/d/1h0u4qJjihVmpmthuHIWm06YnrMDzwsNm/view",
    linkText: "לחצו כאן להסבר על הכנת הסרטון",
  },
  {
    text: "הקבוצות שיכינו את הסרטונים שעונים בצורה הכי טובה על הדרישות יעלו לגמר שיתקיים ב- 02.06 באוניברסיטת תל אביב, בו יועצים מכל התחומים (תעשייה, אקדמיה ומשרד החינוך) יעזרו לכם לפתח את הרעיון ולהציג אותו מול פאנל השופטים שלנו.",
    imagePath: "/3rd_step_icon.svg",
    imageDescription: "אייקון של מבחנות",
    question: "הקבוצה המנצחת תזכה בפרס שווה!",
    answer: "עדיין לא נרשמתם? מהרו לעשות זאת עכשיו.",
    isAccentColor: true,
    link: "https://drive.google.com/file/d/1teBHN60-rWZKoGXE_xrUnVEnqkNsXiaW/view",
    linkText: "לחצו כאן לעיון במכוון השיפוט",
  },
];

const tutorialData = {
  tutorialVideos: [
    {
      text: " סרטון לדוגמה 1 מתחרות ISRAGEM 2024",
      src: "https://drive.google.com/file/d/1_uobB8B1E3A0XkQNTGEkvo6EG4U85au_/preview",
    },
    {
      text: "סרטון לדוגמה 2 מתחרות ISRAGEM 2024",
      src: "https://drive.google.com/file/d/1oFBtPQDfViVKq9gIbFVFEV173Vqkhyuz/preview",
    },
  ],
  videoInstructionsText: "מסמכי עזר - הסברים ונושאי רקע",
  videoInstructionsLink:
    "https://pop.education.gov.il/tchumey_daat/biologya/chativa-elyona/noseem-nilmadim/",
};

const formSrc =
  "https://docs.google.com/forms/d/1rftd3QGVu7Vj6l14bVqgbzXC07p4b6jcwpyIaevXGI0/viewform?embedded=true";

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
  "Developed by David Haggiag for iGEM TAU 2025",
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
        homeText='דף הבית'
        competitionStepsText='שלבי התחרות'
        tutorialsText='סרטוני הדרכה'
        subscriptionText='הירשמו עכשיו'
        overviewText='על קצה המזלג'
      />
      <main className={styles.main}>
        <Header otherLanguagePath='/en' />
        <Hero
          targetDate={targetDate}
          countDownText={countDownText}
          subscriptionButtonText={subscriptionButtonText}
          bannerTexts={bannerTexts}
          direction={direction}
        />
        <CompetitionSteps
          title='שלבי התחרות'
          steps={competitionSteps}
          direction={direction}
        />
        <Tutorials
          title='חומרי עזר ודוגמאות'
          videos={tutorialData.tutorialVideos}
          videoInstructionsText={tutorialData.videoInstructionsText}
          videoInstructionsLink={tutorialData.videoInstructionsLink}
          direction={direction}
        />
        <Subscription title='הירשמו עכשיו' formSrc={formSrc} />
        <Overview
          title='על קצה המזלג'
          overviewInfo={overviewInfo}
          direction={direction}
        />
        <Examples
          title='דוגמאות לשימוש בביולוגיה סינתטית'
          examples={examples}
          direction={direction}
        />
        <Footer credits={credits} />
      </main>
    </>
  );
}
