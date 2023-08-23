import { useSelector } from "react-redux";
import { EventBox } from "../EventBox/index.js";
import { selectEvents } from "../eventInfoSlice.js";
import styles from "./EventList.module.css";

export function EventList({featured = false}) {
    const allEvents = useSelector(selectEvents);
    const featuredEvents = allEvents.filter(event => event.featured === true);
    let renderEvents = [...allEvents];
    
    if (featured) renderEvents = featuredEvents;
    let orderedEvents = renderEvents.reverse();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {orderedEvents.map((event, i) => <EventBox key={i} info={event} />)}
            </div>
        </div>
    );
}