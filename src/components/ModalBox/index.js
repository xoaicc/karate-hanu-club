import styles from "./ModalBox.module.css";
import Button from "../Button";
import { closeIcon, leftArrowIcon, rightArrowIcon } from "../../assets/icons";

export default function ModalBox({children}) {
    const closeBox = () => {
        const modalBox = document.getElementById("modal-box");
        modalBox.classList.add("hidden");
    }

    return (
        <div id="modal-box" className={`${styles.modalBox} hidden`}>
            <Button plusClass={styles.closeBtn} onClickFunc={closeBox}>{closeIcon}</Button>
            <div className={styles.modalSection}>
                <Button>{leftArrowIcon}</Button>
                <div id="modal-content">
                    {children}
                </div>
                <Button>{rightArrowIcon}</Button>
            </div>
        </div>
    );
}