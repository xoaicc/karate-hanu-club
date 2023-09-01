import styles from "./Root.module.css";
import { Outlet, NavLink, Link } from "react-router-dom";
import Button from "../components/Button";
import { menuIcon, upTopIcon } from "../assets/icons";
import ModalBox from "../components/ModalBox";

const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
}

const addMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("hidden");
}

const scrollToTop = () => {
    const startPosition = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / 500, 1);
        const easeInOutCubic = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition * (1 - easeInOutCubic));

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

export default function Root() {

    return (
        <>
            <header>
                <Link id={styles.flogo} to="/" onClick={addMobileMenu}>
                    <img src="/images/flogo-min.png" alt="Our logo" />
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

            <ModalBox />

            <div className={styles.bottomBar}>
                <a href="https://m.me/100908125942435">
                    <img src={require("../assets/images/SocialLogo/messenger-logo.png")} alt="Messenger chat" />
                </a>
                <Button onClickFunc={scrollToTop}>{upTopIcon}</Button>
            </div>

            <footer>
                <p>Phát triển bởi <a href="https://xoaicc.dev">XoaiCC</a> bằng một tình yêu	&hearts;<br />
                    Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
            </footer>
        </>
    );
}