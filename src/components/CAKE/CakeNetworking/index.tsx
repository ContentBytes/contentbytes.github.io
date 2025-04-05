import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";


export default function CakeNetworking() {
  return (
    <div className={styles.background}>
      <div className="container">
        <div className={styles.title}>Networking at your own pace</div>
        <div className={styles.description}>
          <p>Workshops in small groups</p>
          <p>Afterparty</p>
          <p>Frquent breaks</p>
        </div>
        <div className={styles.images}>
          <img
            className={styles.image}
            src={useBaseUrl("img/cake/networking1.png")}
          />
          <img
            className={styles.image}
            src={useBaseUrl("img/cake/networking2.png")}
          />
        </div>
        <div className={styles.images}>
          <img
            className={styles.image}
            src={useBaseUrl("img/cake/networking3.png")}
          />
          <img
            className={styles.image}
            src={useBaseUrl("img/cake/networking4.png")}
          />
          <img
            className={styles.image}
            src={useBaseUrl("img/cake/networking5.png")}
          />
        </div>
      </div>
    </div>
  );
}
