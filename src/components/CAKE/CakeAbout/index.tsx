import clsx from "clsx";
import Pill from "../../Pill";
import stylesCake from "./styles.module.css";
import styles from "@site/src/components/AboutUs/styles.module.css";
import { ButtonWhite } from "../../Button";


const SignupForm = "https://forms.gle/4Z8qW1h58gCYDdLi7";

export default function AboutCake() {
  return (
    <div>
      <div
        className={clsx(
          stylesCake["hero-image"],
          "padding-top--lg",
          "padding-bottom--lg"
        )}
      >
        <div className="container">
          <div
            className={clsx(
              styles.center,
              stylesCake.spaceTop,
              "padding-bottom--lg"
            )}
          >
            <Pill text="19&ndash;20 September, Jagiellonian University, Kraków" />
          </div>
          <p className={clsx(styles.title, "padding-bottom--lg")}>
            CAKE conf
            <br />
            uniting the content enthusiasts
          </p>
          <div className={clsx(styles.description, "padding-bottom--lg")}>
            <p>documentation, UX, accessibility, AI, storytelling, research</p>
          </div>
          <div className={clsx(styles.centerButtons, stylesCake.spaceBottom)}>
            <ButtonWhite link={SignupForm} label="🙋 Sign up for updates" />
          </div>
        </div>
      </div>
    </div>
  );
}
