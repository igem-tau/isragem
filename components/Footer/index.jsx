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

      {/* --- Start of Escape Room Section --- */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href='https://www.escaperoom.co.il/escape-rooms' target='_blank'>
          <Image
            src='/ESCAPE_Logo.png'
            alt='Escape Room logo'
            width={185}
            height={35}
          />
        </a>
        <p style={{
            fontSize: '10px',
            textAlign: 'center',
            marginTop: '5px',
            marginBottom: '0',
            maxWidth: '185px', // Keeps text same width as logo
            lineHeight: '1.2',
            direction: 'rtl'
        }}>
          בחסות אסקייפ רום בע"ם <br /> רשת חדרי הבריחה הגדולה בארץ
        </p>
      </div>
      {/* --- End of Escape Room Section --- */}

    </footer>
  );
}