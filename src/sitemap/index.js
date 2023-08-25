import styles from "./Root.module.css";
import { Outlet, NavLink, Link } from "react-router-dom";
import Button from "../components/Button";
import { menuIcon, closeIcon, leftArrowIcon, rightArrowIcon } from "../assets/icons";

export default function Root() {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
    }

    const addMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.add("hidden");
    }

    const closeBox = () => {
        const modalBox = document.getElementById("modal-box");
        modalBox.classList.add("hidden");
    }

    return (
        <>
            <header>
                <Link id={styles.flogo} to="/" onClick={addMobileMenu}>
                    <img src="/flogo-min.png" alt="Our logo" />
                </Link>
                
                <nav className={styles.onlyDesktop}>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/"}>Trang chủ</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/about"}>Giới thiệu</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/member"}>Thành viên</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/event"}>Khoảng khắc</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/contact"}>Liên hệ</NavLink>
                </nav>
                
                <div>
                    <Button to={"/page/register"} onClickFunc={addMobileMenu}>Đăng ký</Button>
                    <Button plusClass={styles.onlyMobile} onClickFunc={toggleMobileMenu}>{menuIcon}</Button>
                </div>
            </header>

            <div id="mobile-menu" className={`${styles.mobileMenu} hidden`}>
                <nav>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/"} onClick={toggleMobileMenu}>Trang chủ</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/about"} onClick={toggleMobileMenu}>Giới thiệu</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/member"} onClick={toggleMobileMenu}>Thành viên</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/event"} onClick={toggleMobileMenu}>Khoảng khắc</NavLink>
                    <NavLink className={navData => navData.isActive ? styles.navLinkActive : styles.navLink} to={"/page/contact"} onClick={toggleMobileMenu}>Liên hệ</NavLink>
                </nav>
            </div>
            
            <main>
                <Outlet />
            </main>

            <footer>
                <p>Phát triển bởi <a href="https://xoaicc.dev">XoaiCC</a> bằng một tình yêu	&hearts;<br />
                Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
            </footer>

            <div id="modal-box" className={`${styles.modalBox} hidden`}>
                <Button plusClass={styles.closeBtn} onClickFunc={closeBox}>{closeIcon}</Button>
                <div className={styles.modalSection}>
                    <Button>{leftArrowIcon}</Button>
                    <div id="modal-content"></div>
                    <Button>{rightArrowIcon}</Button>
                </div>
            </div>
        </>
    );
}