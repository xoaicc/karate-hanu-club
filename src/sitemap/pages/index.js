import { Outlet, useLocation } from "react-router-dom";
import AboutPage from "./About";
import ContactPage from "./Contact";
import MemberPage from "./Member";
import EventPage from "./Event";
import RegisterPage from "./Register";
import PageNotFound from "./PageNotFound";
import styles from "./Page.module.css";

export default function Page() {
    let currentPage = useLocation();
    let pageName = "";

    switch (currentPage.pathname) {
        case "/page/about":
            pageName = "Về Karate HANU";
            break;
        case "/page/contact":
            pageName = "Liên hệ chúng mình";
            break;
        case "/page/member":
            pageName = "Các thành viên";
            break;
        case "/page/event":
            pageName = "Các khoảng khắc";
            break;
        case "/page/register":
            pageName = "Đăng ký tham gia";
            break;
        default:
            break;
    }

    document.title = pageName + " | CLB Karate HANU";

    return (
        <>
            {currentPage.pathname !== "/page/register" && 
            <div id={styles.pageTitle}>
                <h1>{pageName}</h1>
            </div>}
            <Outlet />
        </>
    );
}

export { AboutPage, ContactPage, MemberPage, EventPage, RegisterPage, PageNotFound };