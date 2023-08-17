import { useSelector } from "react-redux";
import { MemberCard } from "../MemberCard";
import { selectMembers } from "../memberInfoSlice.js";
import styles from "./MemberList.module.css";

export function MemberList() {
    const members = useSelector(selectMembers);

    return (
        <div className={styles.container}>
            {Object.keys(members).map(id => <MemberCard info={members[id]} />)}
        </div>
    );
}