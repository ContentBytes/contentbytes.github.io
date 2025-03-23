import styles from "./styles.module.css";

export default function Pill({ text }) {
  return <div className={styles.container}>{text}</div>;
}
