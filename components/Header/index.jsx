import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ onNavigationClick }) {
  return (
    <header className={styles.general}>
      <Link href={"/"}>
        <Image
          src='/ISRAGEM_Logo.svg'
          alt='Israem logo'
          width={193}
          height={43}
          priority
        />
      </Link>
      <div className={styles.partners}>
        <a href='https://www.tau.ac.il/'>
          <Image
            src='/TAU_Logo.svg'
            alt='Tel Aviv University logo'
            width={100}
            height={35}
            priority
          />
        </a>
        <a href='https://igem.org/'>
          <Image
            src='/iGem_Logo.svg'
            alt='iGem logo'
            width={100}
            height={35}
            priority
          />
        </a>
        <a href='https://www.alagene.co.il/'>
          <Image
            src='/Alagene_Logo.svg'
            alt='Alagene logo'
            width={100}
            height={35}
            priority
          />
        </a>
      </div>
      <span className={styles.navigation} onClick={onNavigationClick}>
        <FontAwesomeIcon icon={faBars} className={styles.nav_icon} />
      </span>
    </header>
  );
}
