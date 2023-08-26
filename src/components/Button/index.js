import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({
    to, 
    plusClass = "", 
    onClickFunc = () => {}, 
    disabled = false, 
    children
}) {
    let customStyles = `${styles.button}`;

    if (plusClass) customStyles += ` ${plusClass}`;
    if (disabled) customStyles += ` ${styles.disabled}`;

    let btn = (
    <button type="button" className={customStyles} onClick={onClickFunc} disabled={disabled}>
        {children}
    </button>);

    if (to) {
        btn = (
        <Link to={to} className={customStyles} onClick={onClickFunc} disabled={disabled}>
            {children}
        </Link>);
    }

    return btn;
}