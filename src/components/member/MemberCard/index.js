import styles from "./MemberCard.module.css";

export function MemberCard({info}) {
    const calcAge = () => {
        const today = new Date();
        const birthDate = new Date(info.birthDate);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monDiff = today.getMonth() < birthDate.getMonth();
        if (monDiff < 0 || (monDiff === 0 && today.getDay() < birthDate.getDay())) {
            age--;
        }

        return age;
    };

    const calcActiceDate = () => {
        const today = new Date();
        const joinDate = new Date(info.joinDate);

        let monCount = (today.getFullYear() - joinDate.getFullYear()) * 12 + (today.getMonth() - joinDate.getMonth());
        
        return monCount;
    }

    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} alt="Member avater image" />
            <h3>{info.fullName}</h3>
            <h4>{info.role}</h4>
            <div className={styles.subInfo}>
                <p>Age: {calcAge()}</p>
                <p>Gender: {info.gender}</p>
            </div>
            {!info.isLeave && <p>Đã tham gia {calcActiceDate()} tháng</p>}
            <div className={styles.socialBar}>
                <a>F</a>
                <a>I</a>
                <a>Z</a>
            </div>
        </div>
    );
}