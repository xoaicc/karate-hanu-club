import styles from "./homepage.module.css";
import heroVideo from "../../assets/images/Banner/Karate-HANU-banner.mp4";
import introImg from "../../assets/images/Intro/Karete-HANU-intro.png";
import { MemberList } from "../../components/member/MemberList";
import Button from "../../components/Button";
import { EventList } from "../../components/event/EventList";
import FlatBlock from "../../components/FlatBlock";
 
export default function HomePage() {
    document.title = "Trang chủ | CLB Karate HANU";

    return (
        <>
            <section id={styles.heroBanner}>
                <div id={styles.heroContainer}>
                    <video id={styles.heroVideo} autoPlay muted>
                        <source src={heroVideo} type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                </div>
                <div id={styles.heroText}>
                    <FlatBlock center={true} transparent={true}>
                        <h1>Karate HANU Club</h1>
                        <h3><span>Can đảm</span> hay <span>sợ hãi</span> là do bạn lựa chọn!</h3>
                    </FlatBlock>
                </div>
            </section>

            <section id={styles.shortIntroSec}>
                <div className="container">
                    <h2>Giới thiệu nhanh</h2>
                    <div id={styles.introContainer}>
                        <div id={styles.leftContainer}>
                            <FlatBlock center={true}>
                                <div id={styles.introDetail}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem. Morbi tristique senectus et netus et malesuada fames ac.</p>
                                </div>
                            </FlatBlock>
                            <div id={styles.statisticNumber}>
                                <FlatBlock part="2" mix={true} center={true}>
                                    <h4><span className={styles.counterNumber}>5+</span>Years experience in Web development</h4>
                                </FlatBlock>
                                <FlatBlock part="2" mix={true} center={true}>
                                    <h4><span className={styles.counterNumber}>10+</span>Large projects were released</h4>
                                </FlatBlock>
                            </div>
                        </div>
                        <div id={styles.rightContainer}>
                            <img 
                            src={introImg} 
                            id={styles.introImg}
                            alt="Karate HANU intro" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.featureMemberSec}>
                <div className="container">
                    <h2>Thành viên nổi bật</h2>
                    <MemberList featured={true} />
                </div>
            </section>

            <section id={styles.featureEventSec}>
                <div className="container">
                    <h2>Khoảng khắc nổi bật</h2>
                    <EventList featured={true} />
                </div>
            </section>

            <section id={styles.registerInvitationSec}>
                <div className="container">
                    <FlatBlock center={true} transparent={true}>
                        <div id={styles.invitation}>
                            <h2>Bạn có lời mời</h2>
                            <h3>Tham gia với chúng mình ngay thôi nào!</h3>
                            <Button to="/page/register">Đăng ký</Button>
                        </div>
                    </FlatBlock>
                </div>
            </section>
        </>
    );
}