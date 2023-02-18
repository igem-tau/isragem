import styles from "./Banner.module.css";

function Event({ date, title }) {
  return (
    <div className={styles.event}>
      <h2>{date}</h2>
      <h2>{title}</h2>
    </div>
  );
}

export default function Banner({
  subscriptionEndDate,
  subscriptionEndText,
  competitionStartDate,
  competitionStartText,
  finalDate,
  finalText,
  className = "",
}) {
  return (
    <div className={`${styles.banner} ${className}`}>
      <Event date={subscriptionEndDate} title={subscriptionEndText} />
      <Event date={competitionStartDate} title={competitionStartText} />
      <Event date={finalDate} title={finalText} />
    </div>
  );
}
