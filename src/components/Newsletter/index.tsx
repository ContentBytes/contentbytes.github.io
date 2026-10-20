import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const NewsletterForm =
  "https://900ea13d.sibforms.com/serve/MUIFAB9ZYTFyMiDWd7oHFFBhpiRKbnQtyqC78au4VTezYOoS1Wnr5coGXLc-17Ui_G3P-5bTmoP0JoDCKbGlAd_bWX0fE4eEAOjIna0e2JmAbn40pUS_bjIza_Ww8mkXFtL4aIH2DX5Hv54ysHP7O-Z8Cjn6oD5_GuADDA2BTvv8jw08GNA1ERcw9Q4p4ucNYi9ddFuWMwYjnGG9pQ==";

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
          <iframe width="540" height="305" src="https://900ea13d.sibforms.com/v2/serve/MUIFAB9ZYTFyMiDWd7oHFFBhpiRKbnQtyqC78au4VTezYOoS1Wnr5coGXLc-17Ui_G3P-5bTmoP0JoDCKbGlAd_bWX0fE4eEAOjIna0e2JmAbn40pUS_bjIza_Ww8mkXFtL4aIH2DX5Hv54ysHP7O-Z8Cjn6oD5_GuADDA2BTvv8jw08GNA1ERcw9Q4p4ucNYi9ddFuWMwYjnGG9pQ==" allowFullScreen style={{display: "block", maxWidth: "100%"}}></iframe>
        </div>
      </div>
    </div>
  );
}
