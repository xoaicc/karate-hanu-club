import { useRef } from "react";
import Cookies from "js-cookie";
import emailjs from "emailjs-com";
import styles from "./Register.module.css";
import FlatBlock from "../../../components/FlatBlock";

export default function RegisterPage() {
    const form = useRef({});
    const getCurrentTime = () => new Date().getFullYear();
    const handleSubmit = e => {
        e.preventDefault();
        alert("Chờ chút nghen...");

        emailjs.sendForm('service_karate_hanu_2', 'template_karate_hanu', form.current, 'kHs6dn52cAEWjm5JU')
            .then(() => {
                alert("Chúc mừng bạn đã gửi đơn đăng ký tham gia CLB Karate HANU thành công! Hãy kiểm tra email của bạn.");
                e.target.reset();
                Cookies.set("form submission", true);
                window.location.reload();
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
                        <label htmlFor="email">Email: <span>*</span></label>
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
                            <option value="Trắng KYU 9" defaultValue="Trắng KYU 9">Trắng KYU 9</option>
                            <option value="Vàng KYU 8">Vàng KYU 8</option>
                            <option value="Xanh dương KYU 7">Xanh dương KYU 7</option>
                            <option value="Xanh lá KYU 6">Xanh lá KYU 6</option>
                            <option value="Xanh lá KYU 5">Xanh lá KYU 5</option>
                            <option value="Tím KYU 4">Tím KYU 4</option>
                            <option value="Nâu KYU 3">Nâu KYU 3</option>
                            <option value="Nâu KYU 2">Nâu KYU 2</option>
                            <option value="Nâu KYU 1">Nâu KYU 1</option>
                            <option value="Đen nhất đẳng">Đen nhất đẳng</option>
                            <option value="Đen nhị đẳng">Đen nhị đẳng</option>
                            <option value="Đen tam đẳng">Đen tam đẳng</option>
                        </select>
                    </div>
                    <div>
                        <label>Liên kết MXH:</label><br />
                        <div>
                            <label htmlFor="facebook"><img src={require("../../../assets/images/SocialLogo/facebook-logo.png")} alt="Facebook logo" />Facebook</label>
                            <input type="text" name="facebook" id="facebook" placeholder="https://www.facebook.com/my-link" />
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
                        <button type="submit" id="submit" disabled={Cookies.get("form submission")}>Gửi đơn</button>
                    </div>
                </FlatBlock>
            </form>
        </div>
    );
}