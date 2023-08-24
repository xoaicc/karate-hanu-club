import { useSelector } from "react-redux";
import { MemberCard } from "../MemberCard";
import { selectMembers } from "../memberInfoSlice.js";
import styles from "./MemberList.module.css";

export function MemberList({featured = false}) {
    const allMembers = useSelector(selectMembers);
    const featuredMembers = allMembers.filter(member => member.featured === true);
    let renderMembers = [...allMembers];

    if (featured) renderMembers = featuredMembers;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {renderMembers.map((member, i) => <MemberCard key={i} info={member} />)}
            </div>
        </div>
    );
}