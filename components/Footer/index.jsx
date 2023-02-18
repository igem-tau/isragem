import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.credits}>
        <span>Designed by Cheli Saban</span>
        <span>Developed by David Haggiag for iGEM TAU 2023</span>
        <span>
          Pictures and icons Designed by{" "}
          <a href='https://www.freepik.com' target='_blank'>
            <u>www.freepik.com</u>
          </a>
        </span>
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
