import styles from "./styles.module.css";
import { ButtonBlack, ButtonWhite } from "../Button";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

const EventPage = "events/2025/8";
const SignupForm = "https://lu.ma/vnnxohf3";

export default function Events() {
  return (
    <div id="events" className={styles.background}>
      <div className="container">
        <div>
          <h1 className="padding-bottom--lg">Next event</h1>
        </div>
        <div className="padding-bottom--lg">
          <img
            alt="Promotion image for the Content Bytes event."
            src={useBaseUrl("img/events/event8.png")}
            className={clsx(styles.image)}
          />
        </div>
        <div className={clsx(styles.buttons)}>
          <ButtonWhite link={EventPage} label="👀 Learn more" />
          <div className={styles.divider} />
          <ButtonBlack link={SignupForm} label="📨 Sign up" />
        </div>
      </div>
    </div>
  );
}
