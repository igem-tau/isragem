import NumberedCard from "../NumberedCard";
import styles from "./CompetitionSteps.module.css";

export default function CompetitionSteps({ title, steps }) {
  return (
    <section className={styles.container} id='competition_steps'>
      <h2>{title}</h2>
      <div className={styles.steps}>
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
            />
          ))}
      </div>
    </section>
  );
}
