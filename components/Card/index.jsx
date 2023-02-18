import styles from "./Card.module.css";

export default function Card({ children, isAccent, className }) {
  return (
    <div
      className={`${styles.card} ${isAccent ? styles.accent : ""} ${className}`}
    >
      {children}
    </div>
  );
}
