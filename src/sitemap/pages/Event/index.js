import { EventList } from "../../../components/event/EventList";
import styles from "./Event.module.css";

export default function EventPage() {
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <select name="filter">
                        <option value="all" defaultValue="all">Tất cả</option>
                </select>
            </div>
            <EventList />
        </div>
    );
}