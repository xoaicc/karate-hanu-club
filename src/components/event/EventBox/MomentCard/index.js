import styles from "./MomentCard.module.css";

export default function MomentCard({moment}) {
    return (
        <img src={require(`../../../../assets/images/Event/${moment.url}`)} className={styles.card} alt={moment.title} />
    );
}