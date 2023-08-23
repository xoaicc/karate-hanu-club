import styles from "./About.module.css";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet. Nec feugiat in fermentum posuere urna nec. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Morbi blandit cursus risus at ultrices mi tempus. Fringilla est ullamcorper eget nulla. Elementum nibh tellus molestie nunc non. Ac orci phasellus egestas tellus. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Curabitur vitae nunc sed velit dignissim. Integer quis auctor elit sed vulputate mi. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Amet tellus cras adipiscing enim eu turpis.</p>
                <img src={require("../../../assets/images/About/Karete-HANU-about-1.png")} alt="Karete HANU about 1" />
            </section>
            <section className={styles.section}>
                <img src={require("../../../assets/images/About/Karete-HANU-about-2.jpg")} alt="Karete HANU about 2" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet. Nec feugiat in fermentum posuere urna nec. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Morbi blandit cursus risus at ultrices mi tempus. Fringilla est ullamcorper eget nulla. Elementum nibh tellus molestie nunc non. Ac orci phasellus egestas tellus. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Curabitur vitae nunc sed velit dignissim. Integer quis auctor elit sed vulputate mi. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Amet tellus cras adipiscing enim eu turpis.</p>
            </section>
            <section className={`${styles.section} ${styles.end}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet. Nec feugiat in fermentum posuere urna nec. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Morbi blandit cursus risus at ultrices mi tempus. Fringilla est ullamcorper eget nulla. Elementum nibh tellus molestie nunc non. Ac orci phasellus egestas tellus. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Curabitur vitae nunc sed velit dignissim. Integer quis auctor elit sed vulputate mi. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Amet tellus cras adipiscing enim eu turpis.</p>
                <img src={require("../../../assets/images/About/Karete-HANU-about-3.jpg")} alt="Karete HANU about 3" />
            </section>
        </div>
    );
}