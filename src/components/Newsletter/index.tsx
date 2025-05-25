import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const NewsletterForm =
  "https://dashboard.mailerlite.com/forms/1431354/151664609085883562/share";

export default function Newsletter() {
  return (
    <div id="newsletter" className={styles.background}>
      <div className="container">
        <div>
          <h1 className={clsx(styles.title, "padding-bottom--lg")}>
            Get notified about upcoming events!
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <p className={styles.description}>
              Missed an event? Ready for some content news every once in a
              while? Sign up for updates!
            </p>
            <p className={styles.info}>
              Can't see the form? Try refreshing the page or{" "}
              <Link to={NewsletterForm}>open the form in a new tab</Link>.
            </p>
          </div>
          <div className="ml-embedded" data-form="3GCsHv"></div>
        </div>
      </div>
    </div>
  );
}
