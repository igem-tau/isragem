import "@/styles/globals.css";
import { Karantina } from "@next/font/google";
import { Analytics } from '@vercel/analytics/react';

const karantina = Karantina({
  display: "swap",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={karantina.className}>
      <Component {...pageProps} />
    </div>
  );
}
