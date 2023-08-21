import styles from "./EventBox.module.css";
import MomentCard from "./MomentCard";

export function EventBox({info}) {
    const makeEventBox = () => {
        const momentCards = [];
        let iterator = 0;
        while (iterator < info.moments.length) {
            momentCards.unshift(<MomentCard key={iterator} moment={info.moments[iterator]} />);
            iterator++;
            if (iterator === 3) break;
        }
        return momentCards;
    }

    const changeFormatDate = () => {
        const date = new Date(info.eventDate);
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.collections}>
                {makeEventBox()}
            </div>
            <h3 className={styles.title}>{info.title}</h3>
            <p className={styles.info}>Diễn ra vào {changeFormatDate()}</p>
        </div>
    );
}