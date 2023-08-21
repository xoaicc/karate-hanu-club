import { useSelector } from "react-redux";
import { EventBox } from "../EventBox/index.js";
import { selectEvents } from "../eventInfoSlice.js";
import styles from "./EventList.module.css";

export function EventList() {
    const events = useSelector(selectEvents);
    const featuredEvents = events.filter(event => event.featured === true);
    const sortedEvents = featuredEvents.reverse();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {sortedEvents.map((event, i) => <EventBox key={i} info={event} />)}
            </div>
        </div>
    );
}