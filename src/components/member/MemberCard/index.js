import styles from "./MemberCard.module.css";
import { ageIcon, genderIcon } from "../../../assets/icons";
import FlatBlock from "../../FlatBlock";

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
        <FlatBlock part="4" mix={true} center={true}>
            <img src={require(`../../../assets/images/Member/${info.avatar}`)} className={styles.avatar} alt="Member avatar" />
            <h3>{info.fullName}</h3>
            <h4>{info.role}</h4>
            <div className={styles.subInfo}>
                <p>{ageIcon} {calcAge()}</p>
                <p>{genderIcon} {info.gender}</p>
            </div>
            {!info.isLeave && <p>Đã tham gia {calcActiceDate()} tháng</p>}
            <div className={styles.socialBar}>
                <a href={`https://www.facebook.com/${info.socialMedia.facebook}`}><img src={require("../../../assets/images/SocialLogo/facebook-logo.png")} alt="Facebook logo" /></a>
                <a href={`https://www.instagram.com/${info.socialMedia.instagram}`}><img src={require("../../../assets/images/SocialLogo/instagram-logo.png")} alt="Instagram logo" /></a>
                <a href={`https://zalo.me/${info.socialMedia.zalo}`}><img src={require("../../../assets/images/SocialLogo/zalo-logo.png")} alt="Zalo logo" /></a>
            </div>
        </FlatBlock>
    );
}