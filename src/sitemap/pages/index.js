import { Outlet } from "react-router-dom";
import AboutPage from "./About";
import ContactPage from "./Contact";
import MemberPage from "./Member";
import MomentPage from "./Moment";
import RegisterPage from "./Register";

export default function Page() {
    return (
        <Outlet />
    );
}

export { AboutPage, ContactPage, MemberPage, MomentPage, RegisterPage };