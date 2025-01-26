import styles from "./styles.module.css";
import Logo from "@site/static/img/logo.svg";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

type OrganizerItem = {
  picture: string;
  name: string;
  alt: string;
  title: string;
  linkedIn: string;
};

const OrganizerList: OrganizerItem[] = [
  {
    picture: "img/orgs/basia.png",
    name: "Barbara Czyż 🐰",
    alt: "Barbara",
    title: "Senior Technical Writer",
    linkedIn: "https://www.linkedin.com/in/barbara-szwarc/",
  },
  {
    picture: "img/orgs/edyta.png",
    name: "Edyta Rakowska 🏕",
    alt: "Edyta",
    title: "Senior Technical\nWriter",
    linkedIn: "https://www.linkedin.com/in/edyta-rakowska/",
  },
  {
    picture: "img/orgs/michal.png",
    name: "Michał Olender ✍️",
    alt: "Michał",
    title: "Technical\nWriter",
    linkedIn: "https://www.linkedin.com/in/michal-olender/",
  },
  {
    picture: "img/orgs/pawel.png",
    name: "Paweł Chłodnicki 🤘",
    alt: "Paweł",
    title: "Senior Content Designer",
    linkedIn: "https://www.linkedin.com/in/pawelchlodnicki/",
  },
];

function Organizer({ picture, name, alt, title, linkedIn }: OrganizerItem) {
  return (
    <div className={clsx("text--center col", styles.card)}>
      <img
        alt={alt}
        src={picture}
        className={styles.image}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
      <div className={styles.socials}>
        <p>
          <Link to={linkedIn}>
            <img
              src="img/logo/linkedin.svg"
              alt="Go to LinkedIn profile"
              height="30"
            />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <section>
      <div className={styles.cardList}>
        {OrganizerList.map((props, idx) => (
          <Organizer key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
