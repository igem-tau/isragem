import Card from "../Card";
import styles from "./Subscription.module.css";

export default function Subscription() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} id='subscription'>
        הירשמו עכשיו
      </h2>
      <Card isAccent className={styles.form}>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSf-unXjLtd_V8rvm1TJCJHuOZuilVXd8QD12dq3lUjZTQcrCA/viewform?embedded=true'
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
