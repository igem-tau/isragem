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

const countDownText = {
  title: "Final Event in:",
  daysText: "days",
  hoursText: "hours",
  minutesText: "minutes",
  secondsText: "seconds",
};
const subscriptionButtonText = "Subscribe Now";
const bannerTexts = {
  competitionStartDate: "14.02",
  competitionStartText: "competition start",
  videoSubmissionEndDate: "04.05",
  videoSubmissionEndText: "video submission",
  finalDate: "04.06",
  finalText: "final event",
};

const competitionSteps = [
  {
    text: "In this competition, you'll be placed in groups of up to 5 students, working alongside your classmates. Your task will be to tackle real-world problems in the field of biotech, conducting research to gain a deep understanding of the scientific background and proposing innovative solutions using synthetic biology tools. Through this experience, you'll have the chance to develop your skills in synthetic biology and work collaboratively with others to solve complex challenges.",
    imagePath: "/1st_step_icon.svg",
    imageDescription: "magnifying glass icon",
    question: "What defines a good solution?",
    answer:
      "A good solution should be applicable, innovative, safe and have a significant impact.",
    isAccentColor: true,
    link: "https://drive.google.com/file/d/1unqdCcZ4eZD0R8_qd_7g8mSOYZgnfIji/view",
    linkText: "Click here for a detailed explanation of the competition requirements.",
  },
  {
    text: "After coming up with a solution, you'll create a 2-minute video presenting yourself, the problem, and your synthetic biology-based solution. This is your chance to be creative using multimedia to make your solution compelling to judges. The video tests your communication skills and ability to present complex scientific ideas in an accessible and engaging way.",
    imagePath: "/2nd_step_icon.svg",
    imageDescription: "video icon",
    question: "What defines a good video?",
    answer:
      "To create a good video, clarity is key. The video should be clear, simple, and unambiguous in conveying its message. It should also be tailored to the target audience and provide sufficient background information for understanding. Maintaining viewer interest is also important; the video should be engaging and hold the viewer's attention throughout. By prioritizing these factors, you can create a video that effectively communicates your solution in a way that is both informative and enjoyable to watch.",
    link: "https://drive.google.com/file/d/1h0u4qJjihVmpmthuHIWm06YnrMDzwsNm/view",
    linkText: "Click here for an explanation on how to create a video.",
  },
  {
    text: "The groups with the most successful videos that meet the requirements will advance to the final round, which will take place on June 2nd at Tel Aviv University. At the final, you'll receive expert guidance from consultants in various fields, including industry, academia, and the Ministry of Education, to help you refine and develop your idea. You'll then present your final solution to a panel of judges.",
    imagePath: "/3rd_step_icon.svg",
    imageDescription: "beakers icon",
    question: "A prize will be given to the winning team!",
    answer: "Still not registered? Hurry up and register your team.",
    isAccentColor: true,
    link: "https://drive.google.com/file/d/1teBHN60-rWZKoGXE_xrUnVEnqkNsXiaW/view",
    linkText: "Click here to view the judging form.",
  },
];

const tutorialData = {
  tutorialVideos: [
    {
      text: "Example video from ISRAGEM 2024",
      src: "https://drive.google.com/file/d/1_uobB8B1E3A0XkQNTGEkvo6EG4U85au_/preview",
    },
    {
      text: "Example video from the international IGEM",
      src: "https://drive.google.com/file/d/1Wir3VMLkPPHJ8Fcck2n6fa0CmSlZhtoe/preview",
    },
  ],
  videoInstructionsText: "Supporting documents - explanations and background topics",
  videoInstructionsLink:
    "https://biology.education.gov.il/",
};

const formSrc =
  "https://docs.google.com/forms/d/1AuCYkwi5EJrHU66xAenE0isTJoIsD4E5BVqGJ2Efx1k/viewform?embedded=true";

const overviewInfo = [
  {
    text: "The iGEM project invites university students worldwide to initiate a synthetic biology research project and showcase their findings at an annual international competition in Paris. The ISRA-GEM competition aims to provide high school students in Israel with a similar opportunity to participate in a synthetic biology research project and present their results.",
    imagePath: "/iGem_light_Logo.svg",
    imageDescription: "iGem logo",
    className: `${overviewStyles.single_card}`,
    imageClassName: overviewStyles.small_image,
  },
  {
    text: "Synthetic biology is a young and multidisciplinary field that merges engineering, computer science, and life sciences. It combines ideas and principles from different domains to design and create novel components or systems that don't exist in nature. The upcoming iGEM competition provides a platform for students to explore this exciting field and apply their skills in synthetic biology.",
    imagePath: "/left_tip_image.svg",
    imageDescription: "lab equipment illustration 1",
    isAccent: true,
    className: overviewStyles.card,
    imageClassName: overviewStyles.medium_image,
  },
  {
    text: '"Synthetic biology is a rapidly growing and promising field that employs cutting-edge technologies to manipulate living systems for various applications. Its potential uses span multiple fields, including health, agriculture, food, environment, materials, and security. The field of synthetic biology is particularly vibrant in Israel and continues to be a focus of research and development" (Israel Innovartion Authority)',
    imagePath: "/right_tip_image.svg",
    imageDescription: "lab equipment illustration 2",
    isAccent: true,
    className: overviewStyles.card,
    imageClassName: overviewStyles.medium_image,
  },
];

const examples = [
  {
    text: "ColorFix is a former iGEM team that transformed its project into a thriving startup company. The team identified the shortcomings in conventional dye production in the textile industry and employed synthetic biology tools to develop an eco-friendly, cost-effective, and sustainable dye production process.",
    videoSrc: "https://player.vimeo.com/video/622253519",
    videoTitle: "ColorFix project from iGem",
  },
  {
    text: "Prof. Oded Shoseyov of Hebrew University's Faculty of Agriculture applies synthetic biology tools to generate valuable animal proteins in plants for various industrial applications. His work showcases the limitless potential of synthetic biology for diverse purposes.",
    videoSrc: "https://www.youtube.com/embed/oorrsuCMIRc?start=589",
    videoTitle: "synthetic biology usage for protein production",
  },
];

const credits = [
  "Designed by Cheli Saban",
  "Developed by David Haggiag for iGEM TAU 2024",
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
        tutorialsText='Tutorial Videos'
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
        <Tutorials
          title='Tutorial Videos'
          videoInstructionsText={tutorialData.videoInstructionsText}
          videoInstructionsLink={tutorialData.videoInstructionsLink}
          videos={tutorialData.tutorialVideos}
        />
        <Subscription title='Subscribe Now' formSrc={formSrc} />
        <Overview title='Overview' overviewInfo={overviewInfo} />
        <Examples title='Examples of Synthetic Biology' examples={examples} />
        <Footer credits={credits} />
      </main>
    </>
  );
}
