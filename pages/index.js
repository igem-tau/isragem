import Header from "@/components/Header/Header";
import Head from "next/head";

function onNavigationClick() {
  alert("To Do!");
}

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
      <main></main>
    </>
  );
}
