import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ otherLanguagePath }) {
  return (
    <header className={styles.general}>
      <Link href={"#"}>
        <Image
          src='/ISRAGEM_Logo.png'
          alt='Israem logo'
          className={styles.logo}
          width={193}
          height={43}
          priority
        />
      </Link>
      <div className={styles.partners}>
        <a href='https://www.tau.ac.il/' target='_blank'>
          <Image
            src='/TAU_Logo.svg'
            alt='Tel Aviv University logo'
            className={styles.image}
            width={100}
            height={35}
            priority
          />
        </a>
        <a href='https://igem.org/' target='_blank'>
          <Image
            src='/iGem_dark_Logo.svg'
            alt='iGem logo'
            className={styles.image}
            width={100}
            height={35}
            priority
          />
        </a>
        <a href='https://www.alagene.co.il/' target='_blank'>
          <Image
            src='/Alagene_Logo.svg'
            alt='Alagene logo'
            className={styles.image}
            width={100}
            height={35}
            priority
          />
        </a>
      </div>
      <div className={styles.nav_container}>
        <Link href={otherLanguagePath}>
          <span className={styles.icon}>
            <Image
              src='/language_switch_icon.svg'
              alt='site language switch icon'
              width={28}
              height={28}
            />
          </span>
        </Link>
        <a href='#navigation'>
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faBars} className={styles.nav_icon} />
          </span>
        </a>
      </div>
    </header>
  );
}
