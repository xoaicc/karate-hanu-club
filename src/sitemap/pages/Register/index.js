import { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Register.module.css";
import FlatBlock from "../../../components/FlatBlock";

export default function RegisterPage() {
    const form = useRef();
    const getCurrentTime = () => new Date().getFullYear();
    const handleSubmit = e => {
        e.preventDefault();
    
        emailjs.sendForm('service_karate_hanu', 'template_karate_hanu', form.current, 'kHs6dn52cAEWjm5JU')
            .then(() => {
                alert("Chúc mừng bạn đã gửi đơn đăng ký tham gia CLB Karate HANU thành công! Hãy kiểm tra email của bạn.");
            }, () => {
                alert("Xin lỗi! Có điều gì đó không đúng đã xảy ra. Hãy báo cáo cho chúng mình qua Fanpage hoặc thử lại.");
            });
    };

    return (
        <div className={styles.container}>
            <form ref={form} onSubmit={handleSubmit}>
                <FlatBlock mix={true}>
                    <div>
                        <label htmlFor="fullName">Họ và Tên: <span>*</span></label>
                        <input type="text" name="fullName" id="fullName" placeholder="Nguyễn Văn A" required />
                    </div>
                    <div>
                        <label htmlFor="email">Địa chỉ email: <span>*</span></label>
                        <input type="email" name="email" id="email" placeholder="vi_du@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="birthday">Ngày sinh:</label>
                        <input type="date" name="birthday" id="birthday" min={`${getCurrentTime() - 100}-01-01`} max={`${getCurrentTime()}-01-01`} />
                    </div>
                    <div>
                        <label>Giới tính:</label>
                        <input type="radio" name="gender" id="male" value="Nam" /><label htmlFor="male">Nam</label>
                        <input type="radio" name="gender" id="female" value="Nữ" /><label htmlFor="female">Nữ</label>
                        <input type="radio" name="gender" id="other" value="LGBTQ+" /><label htmlFor="other">LGBTQ+</label>
                    </div>
                    <div>
                        <label htmlFor="level">Cấp đai:</label>
                        <select name="level" id="level">
                            <option value="white" defaultValue="white">Trắng</option>
                            <option value="yellow">Vàng</option>
                            <option value="green">Xanh lá</option>
                            <option value="blue">Xanh dương</option>
                            <option value="black">Đen</option>
                        </select>
                    </div>
                    <div>
                        <label>Liên kết MXH:</label><br />
                        <div>
                            <label htmlFor="facebook"><img src={require("../../../assets/images/SocialLogo/facebook-logo.png")} alt="Facebook logo" />Facebook <span>*</span></label>
                            <input type="text" name="facebook" id="facebook" placeholder="https://www.facebook.com/my-link" required />
                        </div>
                        <div>
                            <label htmlFor="instagram"><img src={require("../../../assets/images/SocialLogo/instagram-logo.png")} alt="Instagram logo" />Instagram</label>
                            <input type="text" name="instagram" id="instagram" placeholder="https://www.instagram.com/my-link" />
                        </div>
                        <div>
                            <label htmlFor="zalo"><img src={require("../../../assets/images/SocialLogo/zalo-logo.png")} alt="Zalo logo" />Zalo</label>
                            <input type="text" name="zalo" id="zalo" placeholder="https://zalo.me/phone-number" />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Gửi đơn" />
                    </div>
                </FlatBlock>
            </form>
        </div>
    );
}