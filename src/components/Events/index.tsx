import styles from "./styles.module.css";
import { ButtonBlack, ButtonWhite } from "../Button";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

const EventPage = "https://cakeconf.contentbytes.pl";
const SignupForm = "https://lu.ma/gjmlponl";

export default function Events() {
  return (
    <div id="events" className={styles.background}>
      <div className="container">
        <div>
          <h1 className="padding-bottom--lg">Next event</h1>
        </div>
        <div className={clsx("padding-bottom--lg", styles.imageContainer)}>
          <img
            alt="Promotion image for the Content Bytes event."
            src={useBaseUrl("img/cake/cake.png")}
            className={clsx(styles.image)}
          />
        </div>
        <div className={clsx(styles.buttons)}>
          <ButtonWhite link={EventPage} label="👀 Learn more" />
{/*           <div className={styles.divider} />
          <ButtonBlack link={SignupForm} label="📨 Sign up" /> */}
        </div>
      </div>
    </div>
  );
}
