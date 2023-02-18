import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Karantina } from "@next/font/google";
import CompetitionSteps from "@/components/CompetitionSteps";
import Subscription from "@/components/Subscription";
import Overview from "@/components/Overview";
import Examples from "@/components/Examples";

const karantina = Karantina({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400"],
});

function onNavigationClick() {
  alert("To Do!");
}

const targetDate = new Date("2023-03-10T23:59:59.999Z").getTime();

export default function Home() {
  return (
    <>
      <Head>
        <title>Isragem</title>
        <meta
          name='description'
          content='Tel-Aviv University synthetic biology competition'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header onNavigationClick={onNavigationClick} />
      <main className={`${styles.main} ${karantina.className}`}>
        <Hero targetDate={targetDate} />
        <CompetitionSteps />
        <Subscription />
        <Overview />
        <Examples />
      </main>
    </>
  );
}
