import styles from "./About.module.css";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <p>Vào năm 2018, với niềm đam mê dành cho võ thuật nói chung và bộ môn Karate nói riêng, câu lạc bộ Karate HANU đã ra đời với những thành viên ban đầu như: Hạnh Lâm, Hạnh Hạnh,… Thời điểm đỉnh cao, câu lạc bộ thu hút đến 20 bạn trẻ tham gia cho thấy sự chú ý đáng kể của các bạn sinh viên HANU với một môn võ đến từ Nhật Bản. Tuy nhiên, vì một vài lý do mà sau đó câu lạc bộ dần đi xuống trước khi chìm hẳn khi đại dịch xảy ra.</p>
                <img src={require("../../../assets/images/About/Karete-HANU-about-1.png")} alt="Karete HANU about 1" />
            </section>
            <section className={styles.section}>
                <img src={require("../../../assets/images/About/Karete-HANU-about-2.jpg")} alt="Karete HANU about 2" />
                <p>HLV Thế Văn (Ngô Thế Văn) tốt nghiệp Đại học Sư Phạm Thể dục Thể thao tham gia câu lạc bộ từ thời kỳ đầu dưới vai trò huấn luyện viên. Là một người cực kỳ tâm huyết với câu lạc bộ nên bất chấp việc những thành viên cũ ra đi và giãn cách trong đại dịch, Thế Văn vẫn quyết định ở lại để hỗ trợ các thành viên luyện tập online. Thời điểm cuối 2021 khi đại dịch bắt đầu lắng xuống, anh đã quyết tâm đưa câu lạc bộ quay trở lại vừa dưới tư cách huấn luyện viên vừa là chủ nhiệm.</p>
            </section>
            <section className={`${styles.section} ${styles.end}`}>
                <p>Trong quá trình tái xây dựng, câu lạc bộ đã kém sức hút đáng kể so với thời huy hoàng. Dù vậy, bằng tâm huyết cùng sự giúp đỡ bởi cả một số thành viên cũ cũng như thành viên mới, chủ nhiệm Văn vẫn tiếp tục duy trì câu lạc bộ đến thời điểm hiện tại. Với tinh thần vui vẻ và chia sẻ đam mê, Karate HANU đã trở thành nơi không chỉ cho các bạn trẻ yêu thích Karate, muốn luyện tập để thi đấu mà còn là nơi cho những bạn sinh viên muốn trải nghiệm võ thuật nói chung và Karate nói riêng hay muốn được rèn luyện sức khỏe, nâng cao khả năng tự vệ.</p>
                <img src={require("../../../assets/images/About/Karete-HANU-about-3.jpg")} alt="Karete HANU about 3" />
            </section>
        </div>
    );
}