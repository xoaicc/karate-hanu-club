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
                    <NavLink className={styles.navLink} exact activeClassName={styles.isActive} to={"/"}>Trang chủ</NavLink>
                    <NavLink className={styles.navLink} exact activeClassName={styles.isActive} to={"/page/about"}>Giới thiệu</NavLink>
                    <NavLink className={styles.navLink} exact activeClassName={styles.isActive} to={"/page/member"}>Thành viên</NavLink>
                    <NavLink className={styles.navLink} exact activeClassName={styles.isActive} to={"/page/moment"}>Khoảng khắc</NavLink>
                    <NavLink className={styles.navLink} exact activeClassName={styles.isActive} to={"/page/contact"}>Liên hệ</NavLink>
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