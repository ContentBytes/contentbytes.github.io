import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";


export default function Partners() {
  return (
    <div id="partners" className={styles.background}>
      <div className="container">
        <h1 className={styles.title}>Partners</h1>
        <div className={styles.partners}>
          <Link
            to="https://techwriterkoduje.pl"
            title="Go to techwriterkoduje.pl"
          >
            <img
              src={useBaseUrl("img/partners/techwriter-koduje.png")}
              alt="Go to techwriterkoduje.pl"
              className={styles.image}
            />
          </Link>
          <Link to="https://techwriter.pl" title="Go to techwriter.pl">
            <img
              src={useBaseUrl("img/partners/techwriter-pl.png")}
              alt="Go to techwriter.pl"
              className={styles.image}
            />
          </Link>
          <Link to="https://fortedigital.com" title="Go to fortedigital.com">
            <img
              src={useBaseUrl("img/partners/forte.svg")}
              alt="Go to fortedigital.com"
              className={styles.image}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
