import NumberedCard from "../NumberedCard";
import styles from "./CompetitionSteps.module.css";

export default function CompetitionSteps({ title, steps, direction = "ltr" }) {
  return (
    <section className={styles.container}>
      <span className={styles.nav_target} id='competition_steps' />
      <h2>{title}</h2>
      <div className={styles.steps} style={{ direction }}>
        {steps &&
          steps.map((step, index) => (
            <NumberedCard
              key={index}
              number={index + 1}
              text={step.text}
              imagePath={step.imagePath}
              imageDescription={step.imageDescription}
              question={step.question}
              answer={step.answer}
              isAccentColor={step.isAccentColor}
              link={step.link}
              linkText={step.linkText}
            />
          ))}
      </div>
    </section>
  );
}
