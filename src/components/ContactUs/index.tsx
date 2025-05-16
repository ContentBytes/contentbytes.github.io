import clsx from "clsx";
import styles from "./styles.module.css";

export default function ContactUs() {
  return (
    <div id='contact' className={styles.background}>
      <div className={clsx(styles.columns, 'container')}>
        <div className={styles["contact-description"]}>
          <h1>Contact us</h1>
          <p>Reach out to us, we're happy to hear from you!</p>
          <p>
            <li>Share your feedback</li>
            <li>Become a speaker</li>
            <li>Partner with us</li>
          </p>
        </div>
        <div className={styles["contact-info"]}>hello@contentbytes.pl</div>
      </div>
    </div>
  );
}
