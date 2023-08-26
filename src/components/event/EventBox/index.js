import { useDispatch } from "react-redux/es/exports";
import styles from "./EventBox.module.css";
import MomentCard from "./MomentCard";
import { selectEvent } from "../eventInfoSlice";

export function EventBox({info}) {
    const momentCards = [];
    const dispatch = useDispatch();

    const openModalBox = () => {
        const modalBox = document.getElementById("modal-box");
        modalBox.classList.remove("hidden");

        dispatch(selectEvent(info.id));
    };

    const getMomentCards = () => {
        let iterator = 0;
        while (iterator < info.moments.length) {
            momentCards.unshift(<MomentCard key={iterator} moment={info.moments[iterator]} />);
            iterator++;
            if (iterator === 3) break;
        }
    }
    getMomentCards();

    const changeFormatDate = () => {
        const date = new Date(info.eventDate);
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.collections} onClick={openModalBox}>
                {momentCards}
            </div>
            <h3 className={styles.title}>{info.title}</h3>
            <p className={styles.info}>Diễn ra vào {changeFormatDate()}</p>
        </div>
    );
}