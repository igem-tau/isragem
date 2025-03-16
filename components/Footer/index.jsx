import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer({ credits }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.credits}>
        {credits &&
          credits.map((row, index) =>
            index + 1 < credits.length ? (
              <span key={index}>{row}</span>
            ) : (
              <span key={index}>
                {row}{" "}
                <u>
                  <a href='https://www.freepik.com' target='_blank'>
                    www.freepik.com
                  </a>
                </u>
              </span>
            )
          )}
      </div>
      <a href='https://www.tau.ac.il/' target='_blank'>
        <Image
          src='/TAU_Logo.svg'
          alt='Tel Aviv University logo'
          width={100}
          height={35}
        />
      </a>
        <a href='https://www.ort.org.il/' target='_blank'>
        <Image
          src='/ORT_Logo.png'
          alt='Ort logo'
          width={75}
          height={35}
        />
      </a>
      <a href='https://igem.org/' target='_blank'>
        <Image
          src='/iGem_dark_Logo.svg'
          alt='iGem logo'
          width={100}
          height={35}
        />
      </a>
            <a href='https://www.escaperoom.co.il/escape-rooms' target='_blank'>
        <Image
          src='/ESCAPE_Logo.png'
          alt='Escape Room logo'
          width={50}
          height={50}
        />
      </a>
    </footer>
  );
}
