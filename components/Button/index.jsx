import styles from "./Button.module.css";

export default function Button({ text, target, className = "" }) {
  return (
    <a href={target} className={`${styles.button} ${className}`}>
      <h2>{text}</h2>
    </a>
  );
}
