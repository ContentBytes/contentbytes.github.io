import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type PartnerItem = {
  label: string;
  link: string;
  imageSrc: string;
};

const partnerList: PartnerItem[] = [
  {
    label: "Go to techwriter.pl",
    link: "https://techwriter.pl",
    imageSrc: "img/partners/techwriter-pl.png",
  },
  {
    label: "Go to techwriterkoduje.pl",
    link: "https://techwriterkoduje.pl",
    imageSrc: "img/partners/techwriter-koduje.png",
  },
  {
    label: "Go to apify.com",
    link: "https://apify.com",
    imageSrc: "img/partners/apify.png",
  },
];

function Partner({ label, link, imageSrc }: PartnerItem) {
  return (
    <span>
      <Link to={link} title={label}>
        <img src={imageSrc} alt={label} className={styles.image} />
      </Link>
    </span>
  );
}

export default function Partners() {
  return (
    <div id="partners" className={styles.background}>
      <div className="container">
        <div>
          <h1>Partners</h1>
        </div>
        <div className={clsx("row", styles.partners)}>
          {partnerList.map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
