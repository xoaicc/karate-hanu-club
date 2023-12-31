import styles from "./MemberCard.module.css";
import { ageIcon, genderIcon } from "../../../assets/icons";
import FlatBlock from "../../FlatBlock";

export function MemberCard({ info }) {
    const calcAge = () => {
        const today = new Date();
        const birthday = new Date(info.birthday);

        let age = today.getFullYear() - birthday.getFullYear();
        const monDiff = today.getMonth() < birthday.getMonth();
        if (monDiff < 0 || (monDiff === 0 && today.getDay() < birthday.getDay())) {
            age--;
        }

        return age;
    };

    const calcActiceDate = () => {
        const today = new Date();
        const joinDate = new Date(info.joinDate);

        if (info.leaveDate) {
            const leaveDate = new Date(info.leaveDate);
            return (leaveDate.getFullYear() - joinDate.getFullYear()) * 12 + (leaveDate.getMonth() - joinDate.getMonth());
        } else return (today.getFullYear() - joinDate.getFullYear()) * 12 + (today.getMonth() - joinDate.getMonth());
    };

    const getColorBelt = () => {
        switch (info.level) {
            case "Trắng KYU 9":
                return styles.white;
            case "Vàng KYU 8":
                return styles.yellow;
            case "Xanh dương KYU 7":
                return styles.blue;
            case "Xanh lá KYU 6":
                return styles.green;
            case "Xanh lá KYU 5":
                return styles.green;
            case "Tím KYU 4":
                return styles.violet;
            case "Nâu KYU 3":
                return styles.brown;
            case "Nâu KYU 2":
                return styles.brown;
            case "Nâu KYU 1":
                return styles.brown;
            case "Đen nhất đẳng":
                return styles.black;
            case "Đen nhị đẳng":
                return styles.black;
            case "Đen tam đẳng":
                return styles.black;
            default:
                return null;
        }
    }

    return (
        <FlatBlock part="4" mix={true} multiple={true} center={true}>
            <div className={styles.wrapper}>
                <img src={info.avatar ? require(`../../../assets/images/Member/${info.avatar}`) : require(`../../../assets/images/Member/placehover.jpg`)} className={styles.avatar} alt="Member avatar" />
                <h3>{info.fullName}</h3>
                <h4>{info.role}</h4>
                <div className={`${styles.belt} ${getColorBelt()}`}>
                    {info.level}
                </div>
                <div className={styles.subInfo}>
                    <p>{ageIcon} {calcAge()}</p>
                    <p>{genderIcon} {info.gender}</p>
                </div>
                <p>{info.leaveDate ? "Từng" : "Đã"} tham gia <span className={`${styles.activeDate} ${info.leaveDate && styles.wasLeave}`}>{calcActiceDate()} tháng</span></p>
                <div className={styles.socialBar}>
                    {info.socialProfile.facebook && <a href={`https://www.facebook.com/${info.socialProfile.facebook}`}><img src={require("../../../assets/images/SocialLogo/facebook-logo.png")} alt="Facebook logo" /></a>}
                    {info.socialProfile.instagram && <a href={`https://www.instagram.com/${info.socialProfile.instagram}`}><img src={require("../../../assets/images/SocialLogo/instagram-logo.png")} alt="Instagram logo" /></a>}
                    {info.socialProfile.zalo && <a href={`https://zalo.me/${info.socialProfile.zalo}`}><img src={require("../../../assets/images/SocialLogo/zalo-logo.png")} alt="Zalo logo" /></a>}
                </div>
            </div>
        </FlatBlock>
    );
}