import clsx from "clsx";
import styles from "./styles.module.css";


export default function CakeTopics() {
  return (
    <div className={styles.background}>
      <div className={clsx("container")}>
        <div className={clsx(styles.text, styles.title)}>Diverse topics</div>
        <div className={clsx(styles.text, styles.topics)}>
          <p>Storytelling</p>
          <p>Documentation</p>
          <p>UX writing</p>
          <p>Accessibility</p>
          <p>AI</p>
        </div>
      </div>
    </div>
  );
}
