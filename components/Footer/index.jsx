import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer({ credits }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.credits}>
        {credits &&
          credits.map((row, index) =>
            index + 1 < credits.length ? (
              <span>{row}</span>
            ) : (
              <span>
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
      <a href='https://igem.org/' target='_blank'>
        <Image
          src='/iGem_dark_Logo.svg'
          alt='iGem logo'
          width={100}
          height={35}
        />
      </a>
      <a href='https://www.alagene.co.il/' target='_blank'>
        <Image
          src='/Alagene_Logo.svg'
          alt='Alagene logo'
          width={100}
          height={35}
        />
      </a>
    </footer>
  );
}
