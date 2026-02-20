import clsx from "clsx";
import styles from "./styles.module.css";
import { ButtonBlack, ButtonWhite } from "../Button";
import Pill from "../Pill";

const SignupForm = "#newsletter";
const UpcomingEvent = "events/2025/8";
const AllEvents = "events";

export default function AboutUs() {
  return (
    <div>
      <div
        className={clsx(
          styles["hero-image"],
          "padding-top--lg",
          "padding-bottom--lg"
        )}
      >
        <div
          className={clsx(
            styles.center,
            "padding-bottom--lg",
            "padding-top--lg"
          )}
        >
        {/* <Pill text="Next event: Workshop for technical writers" /> */}
        </div>
        <p className={clsx(styles.title)}>
          Community of content enthusiasts
          <br />
          from different backgrounds
        </p>
        <div className={clsx(styles.description, "padding-bottom--lg")}>
          <p>documentation, UX writing, accessibility, AI, storytelling, management</p>
        </div>
        <div
          className={clsx(styles.centerButtons, styles.buttons, "padding-bottom--lg")}
        >
          <ButtonWhite link={SignupForm} label="🙋 Sign up for updates" />
          <div className={styles.divider} />
          {/* <ButtonBlack link={UpcomingEvent} label="👀 Check upcoming event" /> */}
          <ButtonBlack link={AllEvents} label="👀 Check past events" />
        </div>
      </div>
    </div>
  );
}
