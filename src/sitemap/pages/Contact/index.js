import styles from "./Contact.module.css";
import FlatBlock from "../../../components/FlatBlock";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div id={styles.leftContainer}>
                <FlatBlock mix={true} transparent={true}>
                    <h3>Thông tin liên hệ</h3>
                    <ul id={styles.contactInfo}>
                        <li>Trang mạng: <br /><span><a href="/">Karatehanu.club</a></span></li>
                        <li>Vị trí: <br /><span><a href="https://goo.gl/maps/bDpzg1dEJjcVvb527">Sảnh C, Trường Đại học Hà Nội</a></span></li>
                        <li>Điện thoại: <br /><span><a href="tel:+84378890297">+84 378 890 297</a></span></li>
                        <li>Hòm thư: <br /><span><a href="mailto:banchunhiem@karatehanu.club">Banchunhiem@karatehanu.club</a></span></li>
                        <li>Fanpage: <br /><span><a href="https://www.facebook.com/karatehanu.club">CLB Karate HANU</a></span></li>
                        <li>Nhóm Facebook: <br /><span><a href="https://www.facebook.com/groups/karatehanu.club">CLB Karatedo HANU (ĐH Hà Nội)</a></span></li>
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