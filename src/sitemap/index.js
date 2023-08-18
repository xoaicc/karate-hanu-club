import styles from "./Root.module.css";
import { Outlet, NavLink } from "react-router-dom";
import Button from "../components/Button";

export default function Root() {
    return (
        <>
            <header className="flat-block-2">
                <div>
                    <img alt="our logo" />
                </div>
                
                <nav>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/"}>Trang chủ</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/about"}>Giới thiệu</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/member"}>Thành viên</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/moment"}>Khoảng khắc</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/contact"}>Liên hệ</NavLink>
                </nav>
                
                <Button>
                    <NavLink to={"/page/register"}>Đăng ký</NavLink>
                </Button>
            </header>
            
            <main>
                <Outlet />
            </main>

            <footer>
                <p>Phát triển bởi XoaiCC bằng một tình yêu	&hearts;</p>
            </footer>
        </>
    );
}