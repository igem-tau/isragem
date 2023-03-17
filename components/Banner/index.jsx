import styles from "./Banner.module.css";

function Event({ date, title }) {
  return (
    <div className={styles.event}>
      <h2>{date}</h2>
      <h3>{title}</h3>
    </div>
  );
}

export default function Banner({
  competitionStartDate,
  competitionStartText,
  videoSubmissionEndDate,
  videoSubmissionEndText,
  finalDate,
  finalText,
  direction,
  className = "",
}) {
  return (
    <div className={`${styles.banner} ${className}`} style={{ direction }}>
      <Event date={competitionStartDate} title={competitionStartText} />
      <Event date={videoSubmissionEndDate} title={videoSubmissionEndText} />
      <Event date={finalDate} title={finalText} />
    </div>
  );
}
