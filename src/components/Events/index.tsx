import styles from "./styles.module.css";
import { ButtonYellow } from "../Button";

const EventsPage = "events";

type EventItem = {
  title: string;
  date: string;
  state: string;
};

const RecentEvents: EventItem[] = [
  {
    title: "Content Bytes KRK #05",
    date: "26 February 2025",
    state: "[✅ Completed]",
  },
  {
    title: "Content Bytes KRK #04",
    date: "20 January 2025",
    state: "[✅ Completed]",
  },
  {
    title: "Content Bytes KRK #03",
    date: "26 November 2024",
    state: "[✅ Completed]",
  },
];

function CreateEvent({ title, date, state }: EventItem) {
  return (
    <div className={styles.event}>
      <p className={styles["event-title"]}>{title}</p>
      <p>{date}</p>
      <p>{state}</p>
    </div>
  );
}

export default function Events() {
  return (
    <div id="events" className={styles.background}>
      <div className="container">
        <div>
          <h1>Events</h1>
        </div>
        <div className={styles.eventList}>
          {RecentEvents.map((props, idx) => (
            <CreateEvent key={idx} {...props} />
          ))}
        </div>
        <div className={styles.buttons}>
          <ButtonYellow link={EventsPage} label="🔗 Check all events" />
        </div>
      </div>
    </div>
  );
}
