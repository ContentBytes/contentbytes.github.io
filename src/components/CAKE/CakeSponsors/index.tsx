import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function CakePartners() {
  return (
    <div className={styles.background}>
      <div className={styles.title}>Media partners</div>
      <div className={styles.centerImgs}>
        <div>
          <Link
            to="https://techwriterkoduje.pl"
            title="Go to techwriterkoduje.pl"
          >
            <img
              src="img/partners/techwriter-koduje.png"
              alt="Go to techwriterkoduje.pl"
              className={styles.image}
            />
          </Link>
        </div>
        <div className={styles.divider} />
        <div>
          <Link to="https://techwriter.pl" title="Go to techwriter.pl">
            <img
              src="img/partners/techwriter-pl.png"
              alt="Go to techwriter.pl"
              className={styles.image}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
