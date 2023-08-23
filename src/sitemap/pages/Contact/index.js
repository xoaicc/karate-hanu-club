import styles from "./Contact.module.css";
import FlatBlock from "../../../components/FlatBlock";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div id={styles.leftContainer}>
                <FlatBlock mix={true} transparent={true}>
                    <h3>Thông tin liên hệ</h3>
                    <ul id={styles.contactInfo}>
                        <li>Trang mạng: <br /><span>Karatehanu.club</span></li>
                        <li>Vị trí: <br /><span>Sảnh C, Trường Đại học Hà Nội</span></li>
                        <li>Điện thoại: <br /><span>+84 123 456 789</span></li>
                        <li>Hòm thư: <br /><span>Karatehanu@starblue.one</span></li>
                        <li>Fanpage: <br /><span>www.facebook.com/profile.php?id=100083074043354</span></li>
                        <li>Nhóm Facebook: <br /><span>www.facebook.com/groups/karatedo.hanu</span></li>
                    </ul>
                </FlatBlock>
            </div>
            
            <div id={styles.mapsContainer}>
                <a href="https://goo.gl/maps/bDpzg1dEJjcVvb527" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../../assets/images/maps.png")} className={styles.maps} alt="Google maps location" />
                </a>
            </div>
        </div>
    );
}