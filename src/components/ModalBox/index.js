import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ModalBox.module.css";
import Button from "../Button";
import { getSelectedId, selectEvents } from "../event/eventInfoSlice";
import { closeIcon, leftArrowIcon, rightArrowIcon } from "../../assets/icons";
import MomentCard from "../event/EventBox/MomentCard";

export default function ModalBox() {
    let selectedEvent = null;
    let selectedMoments = null;
    
    const allEvents = useSelector(selectEvents);
    const selectedId = useSelector(getSelectedId);
    if (selectedId) selectedEvent = allEvents.filter(event => event.id === selectedId);
    if (selectedEvent) selectedMoments = selectedEvent[0].moments;

    const sliderRef = useRef(null);
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const closeBox = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = 0;
            setIsEnd(false);
        }
        
        const modalBox = document.getElementById("modal-box");
        modalBox.classList.add("hidden");
    }

    const checkScrollPosition = () => {
        if (sliderRef.current) {
            const container = sliderRef.current;
            setIsStart(container.scrollLeft === 0);
            setIsEnd(container.scrollLeft + container.clientWidth >= container.scrollWidth - 1);
        }
    };
    
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -sliderRef.current.offsetWidth,
                behavior: "smooth",
            });
        }
    };
    
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
            left: sliderRef.current.offsetWidth,
            behavior: "smooth",
            });
        }
    };

    return (
        <div id="modal-box" className={`${styles.wrapper} hidden`}>
            <Button plusClass={styles.closeBtn} onClickFunc={closeBox}>{closeIcon}</Button>
            <div className={styles.modalSection}>
                <Button onClickFunc={scrollLeft} disabled={isStart}>{leftArrowIcon}</Button>
                <div className={styles.modalContent} ref={sliderRef} onScroll={checkScrollPosition}>
                    <div className={styles.modalContentInner}>
                        {selectedMoments && selectedMoments.map((moment, iterator) => 
                            <div className={styles.card} key={iterator}>
                                <MomentCard moment={moment} />
                                <h3>{moment.title}</h3>
                            </div>
                        )}
                    </div>
                </div>
                <Button plusClass={styles.secondBtn} onClickFunc={scrollRight} disabled={isEnd}>{rightArrowIcon}</Button>
            </div>
        </div>
    );
}