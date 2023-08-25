import styles from "./EventBox.module.css";
import MomentCard from "./MomentCard";

export function EventBox({info}) {
    const momentCards = [];

    const openModalBox = () => {
        const modalBox = document.getElementById("modal-box");
        modalBox.classList.remove("hidden");
        
        const modalContent = modalBox.querySelector("#modal-content");
        modalContent.innerHTML = {momentCards};
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