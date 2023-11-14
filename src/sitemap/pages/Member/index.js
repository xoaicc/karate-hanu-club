import styles from "./Member.module.css";
import { useState } from "react";
import { MemberList } from "../../../components/member/MemberList";

export default function MemberPage() {
    const [filter, setFilter] = useState(2);

    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <select name="filter" value={filter} onChange={e => setFilter(Number(e.target.value))}>
                    <option value={2}>Tất cả</option>
                    <option value={1}>Thành viên vẫn hoạt động</option>
                    <option value={0}>Thành viên đã rời đi</option>
                </select>
            </div>
            <MemberList filter={filter} />
        </div>
    );
}