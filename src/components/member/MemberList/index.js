import { useSelector } from "react-redux";
import { MemberCard } from "../MemberCard";
import { selectMembers } from "../memberInfoSlice.js";
import styles from "./MemberList.module.css";

export function MemberList({ featured = false, filter = 2 }) {
    const allMembers = useSelector(selectMembers);
    const featuredMembers = allMembers.filter(member => member.featured === true);
    const leaveMembers = allMembers.filter(member => member.leaveDate);
    const leftMembers = allMembers.filter(member => !member.leaveDate);
    let renderMembers = allMembers;

    if (featured) renderMembers = featuredMembers;
    if (filter === 1) renderMembers = leftMembers;
    if (filter === 0) renderMembers = leaveMembers;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {renderMembers.map((member, i) => <MemberCard key={i} info={member} />)}
            </div>
        </div>
    );
}