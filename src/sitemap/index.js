import styles from "./Root.module.css";
import { Outlet, NavLink, Link } from "react-router-dom";
import Button from "../components/Button";
import { menuIcon } from "../assets/icons";
// import logo from "public/assets/main-logo.png";

export default function Root() {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
    }

    const addMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.add("hidden");
    }

    return (
        <>
            <header>
                <Link to="/" onClick={addMobileMenu}>
                    {/* <img src={logo} alt="Our logo" /> */}
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
                <p>Phát triển bởi XoaiCC bằng một tình yêu	&hearts;<br />
                Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
            </footer>
        </>
    );
}