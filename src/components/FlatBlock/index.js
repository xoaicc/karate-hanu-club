import styles from "./FlatBlock.module.css";

export default function FlatBlock({
    part = "1",
    mix = false,
    multiple = false,
    center = false,
    transparent = false,
    children
}) {
    let customStyle = `${styles.wrapper}`;
    switch (part) {
        case "1":
            customStyle += ` ${styles.full}`;
            break;
        case "2":
            customStyle += ` ${styles.half}`;
            break;
        case "3":
            customStyle += ` ${styles.third}`;
            break;
        case "4":
            customStyle += ` ${styles.forth}`;
            break;
        default:
            break;
    }
    if (mix) customStyle += ` ${styles.mix}`;
    if (multiple) customStyle += ` ${styles.multiple}`;
    if (center) customStyle += ` ${styles.center}`;
    if (transparent) customStyle += ` ${styles.transparent}`;

    return (
        <div className={customStyle}>
            {children}
        </div>
    );
}