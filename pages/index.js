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
      <Navigation
        homeText='דף הבית'
        competitionStepsText='שלבי התחרות'
        subscriptionText='הירשמו עכשיו'
        overviewText='על קצה המזלג'
      />
      <main className={styles.main}>
        <Header />
        <Hero targetDate={targetDate} />
        <CompetitionSteps />
        <Subscription />
        <Overview />
        <Examples />
        <Footer />
      </main>
    </>
  );
}
