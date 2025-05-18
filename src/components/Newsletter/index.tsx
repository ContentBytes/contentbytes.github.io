import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const NewsletterForm =
  "https://dashboard.mailerlite.com/forms/1431354/151664609085883562/share";

export default function Newsletter() {
  return (
    <div id="newsletter" className={clsx("container", styles.spaceBottom)}>
      <div>
        <h1 className={styles.title}>Get notified about upcoming events!</h1>
      </div>
      {/* <div className={styles.center}> */}
        <div className="ml-embedded" data-form="3GCsHv"></div>
        {/* <div className={styles.divider} /> */}
        {/* <div>
          <p className={styles.spaceTop}>
            Leave us your email and we'll keep you
            <br /> well-informed about what's cooking 👨‍🍳
          </p>
          <p>No spam, only essential updates.</p>
          <p>You can change your preferences any time.</p>
        </div>
      </div> */}
      <div>
        Can't see the form? Try refreshing the page or{" "}
        <Link to={NewsletterForm}>open the form in a new tab</Link>.
      </div>
    </div>
  );
}
