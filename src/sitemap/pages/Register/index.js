import styles from "./Register.module.css";
import FlatBlock from "../../../components/FlatBlock";

export default function RegisterPage() {
    return (
        <div className={styles.container}>
            <form>
                <FlatBlock mix={true}>
                    <div>
                        <label htmlFor="fullName">Họ và Tên: *</label>
                        <input type="text" name="fullName" id="fullName" placeholder="Nguyễn Văn A" required />
                    </div>
                    <div>
                        <label htmlFor="email">Địa chỉ email: *</label>
                        <input type="email" name="email" id="email" placeholder="vi_du@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="birthDate">Ngày sinh:</label>
                        <input type="date" name="birthDate" id="birthDate" />
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
                            <option value="white" defaultValue="all">Trắng</option>
                        </select>
                    </div>
                    <div>
                        <label>Liên kết MXH:</label><br />
                        <label htmlFor="facebook"><img src={require("../../../assets/images/SocialLogo/facebook-logo.png")} alt="Facebook logo" /></label>
                        <input type="text" name="facebook" id="facebook" placeholder="https://www.facebook.com/my-link" required />
                        <br />
                        <label htmlFor="instagram"><img src={require("../../../assets/images/SocialLogo/instagram-logo.png")} alt="Instagram logo" /></label>
                        <input type="text" name="instagram" id="instagram" placeholder="https://www.instagram.com/my-link" />
                        <br />
                        <label htmlFor="zalo"><img src={require("../../../assets/images/SocialLogo/zalo-logo.png")} alt="Zalo logo" /></label>
                        <input type="text" name="zalo" id="zalo" placeholder="https://zalo.me/phone-number" />
                    </div>
                    <div>
                        <input type="submit" value="Gửi đơn" />
                    </div>
                </FlatBlock>
            </form>
        </div>
    );
}