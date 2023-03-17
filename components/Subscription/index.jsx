import Card from "../Card";
import styles from "./Subscription.module.css";

export default function Subscription({ title, formSrc }) {
  return (
    <section className={styles.container}>
      <span className={styles.nav_target} id='subscription' />
      <h2 className={styles.title}>{title}</h2>
      <Card isAccent className={styles.form}>
        <iframe
          src={formSrc}
          className={styles.iframe}
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Loading…
        </iframe>
      </Card>
    </section>
  );
}
