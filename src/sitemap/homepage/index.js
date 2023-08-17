import { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import { Banner01, Banner02 } from "../../assets/images/Banner";
import { MemberList } from "../../components/member/MemberList";
 
export default function HomePage() {
    const [bannerImg, setBannerImg] = useState(Banner01);

    // useEffect(() => {
    //     const bannerChanger = setInterval(() => {
    //         setBannerImg(prevBannerImg => 
    //             prevBannerImg === Banner01 ? Banner02 : Banner01
    //         );
    //     }, 5000);

    //     return () => clearInterval(bannerChanger);
    // }, []);

    return (
        <>
            <section id={styles.heroBanner}>
                <div id={styles.heroImgContainer}>
                    <img 
                        src={bannerImg} 
                        id={styles.heroImg}
                        alt="Karate HANU banner" 
                    />
                </div>
                <div id={styles.heroText} className="flat-block-static">
                    <h1>Karate HANU Club</h1>
                    <h3><span>Courage</span> or <span>fear</span> are your choice!</h3>
                </div>
            </section>

            <section id={styles.shortIntroSec} className="flex-container">
                <div className="container">
                    <h2>Giới thiệu nhanh</h2>
                    <div id={styles.introContainer}>
                        <div id={styles.leftContainer}>
                            <div id={styles.introDetail} className="flat-block-static">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem. Morbi tristique senectus et netus et malesuada fames ac.</p>
                            </div>
                            <div id={styles.statisticNumber} className="flex-container">
                                <div className="half-container flat-block">
                                    <h4><span className={styles.counterNumber}>5+</span>Years experience in Web development</h4>
                                </div>
                                <div className="half-container flat-block-2">
                                    <h4><span className={styles.counterNumber}>10+</span>Large projects were released</h4>
                                </div>
                            </div>
                        </div>
                        <div id={styles.rightContainer}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem. Morbi tristique senectus et netus et malesuada fames ac.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.featureMemberSec}>
                <div className="container">
                    <h2>Thành viên nổi bật</h2>
                    <div id={styles.memberContainer}>
                        <MemberList />
                    </div>
                </div>
            </section>

            <section id={styles.featureMomentSec}>
                <div className="container">
                    <h2>Khoảng khắc nổi bật</h2>
                </div>
            </section>

            <section id={styles.registerInvitationSec}>
                <div className="container">
                    <h2>Tham gia ngay!</h2>
                </div>
            </section>
        </>
    );
}