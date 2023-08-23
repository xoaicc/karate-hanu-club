import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({
    to, 
    plusClass = "", 
    onClickFunc = () => {}, 
    children
}) {
    let btn = 
    <button type="button" className={`${styles.button} ${plusClass}`} onClick={onClickFunc}>
        {children}
    </button>;

    if (to) {
        btn = 
        <Link to={to} className={`${styles.button} ${plusClass}`}  onClick={onClickFunc}>
            {children}
        </Link>;
    }

    return btn;
}