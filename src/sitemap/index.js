import styles from "./Root.module.css";
import { Outlet, NavLink } from "react-router-dom";
import Button from "../components/Button";
import { menuIcon } from "../assets/icons";

export default function Root() {
    let mobileMenu = null;
    window.onload = () => {
        mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.querySelectorAll("a").addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    };

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle("hidden");
    }

    return (
        <>
            <header>
                <div>
                    <img alt="Our logo" />
                </div>
                
                <nav className={styles.onlyDesktop}>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/"}>Trang chủ</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/about"}>Giới thiệu</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/member"}>Thành viên</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/event"}>Khoảng khắc</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/contact"}>Liên hệ</NavLink>
                </nav>
                
                <div>
                    <Button to={"/page/register"}>Đăng ký</Button>
                    <Button plusClass={styles.onlyMobile} onClickFunc={toggleMobileMenu}>{menuIcon}</Button>
                </div>
            </header>

            <div id="mobile-menu" className={`${styles.mobileMenu} hidden`}>
                <nav>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/"}>Trang chủ</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/about"}>Giới thiệu</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/member"}>Thành viên</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/event"}>Khoảng khắc</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/contact"}>Liên hệ</NavLink>
                </nav>
            </div>
            
            <main>
                <Outlet />
            </main>

            <footer>
                <p>Phát triển bởi XoaiCC bằng một tình yêu	&hearts;<br />
                Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
            </footer>
        </>
    );
}