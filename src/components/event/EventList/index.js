import { useSelector } from "react-redux";
import { EventBox } from "../EventBox/index.js";
import { selectEvents } from "../eventInfoSlice.js";
import styles from "./EventList.module.css";

export function EventList() {
    const events = useSelector(selectEvents);

    return (
        <div className={styles.container}>
            {Object.keys(events).map((eventId, i) => <EventBox key={i} info={members[eventId]} />)}
        </div>
    );
}