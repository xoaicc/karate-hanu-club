import styles from "./EventBox.module.css";
import MomentCard from "./MomentCard";

export function EventBox({info}) {
    return (
        <div className={styles.wrapper}>
            <MomentCard />
        </div>
    );
}