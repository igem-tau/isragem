import "@/styles/globals.css";
import { Karantina } from "@next/font/google";

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
