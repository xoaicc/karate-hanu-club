import styles from "./Member.module.css";
import { MemberList } from "../../../components/member/MemberList";

export default function MemberPage() {
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <select name="filter">
                    <option value="all" defaultValue="all">Tất cả</option>
                </select>
            </div>
            <MemberList />
        </div>
    );
}