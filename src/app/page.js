import { Nav } from "@/components/Nav";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.fold}>
        <h1 className={styles.foldTextTop}>Hello! I'm a</h1>
        <h1 className={styles.foldTextBottom}>Product Designer</h1>
        <img className={styles.foldBackground} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/fold-spot-gradient.png`} />
      </div>


      <div className={styles.body}>

        <div className={styles.linksContainer}>
          <div className={styles.linkRow}>
            <Link className={styles.linkRowImgLeftContainer} href={'/govtech'}>
              <img className={styles.linkRowImg} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/Harvest_img.png`} />
            </Link>

            <Link className={`${styles.linkContainerLink} ${styles.linkContainerLinkRight}`} style={{ backgroundColor: "#F0F7D4", color: "#538C19" }} href={'/govtech'} id="govtech">
              <div className={styles.linkNoticeContainer}>
                <p className={styles.linkTitleInNotice}>Enabling Teachers To Focus on Student’s Needs</p>
                <div className={styles.linkNoticeNotice}>
                  <img className={styles.linkNoticeImg} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/wip-icon.png`} />
                  <p className={styles.linkNotice}>This is a work in progress!</p>
                </div>
              </div>

              <div className={styles.linkDescriptionContainer}>
                <h5 className={styles.linkDescriptionHeader}>Harvest Education</h5>
                <p className={styles.linkDescriptionText}>UI/UX Designer</p>
              </div>
            </Link>
          </div>

          <div className={styles.linkRow}>
            <Link className={`${styles.linkContainerLink} ${styles.linkContainerLinkLeft}`} style={{ backgroundColor: "#FFF5E1", color: "#CA3232" }} href={'/govtech'} id="govtech">
              <p className={styles.linkTitle}>Safeguarding Singapore’s Digital Space</p>
              <div className={styles.linkDescriptionContainer}>
                <h5 className={styles.linkDescriptionHeader}>Govtech</h5>
                <p className={styles.linkDescriptionText}>Anti-Scam Product Design Intern</p>
              </div>
            </Link>

            <Link className={styles.linkRowImgRightContainer} href={'/govtech'}>
              <img className={styles.linkRowImg} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/Govtech_img.png`} />
            </Link>
          </div>

          <div className={styles.linkRow}>
            <Link className={styles.linkRowImgLeftContainer} href={'/govtech'}>
              <img className={styles.linkRowImg} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/SGInnovate_img.png`} />
            </Link>

            <Link className={`${styles.linkContainerLink} ${styles.linkContainerLinkRight}`} style={{ backgroundColor: "#FFE5F7", color: "#9412A8" }} href={'/govtech'} id="govtech">
              <p className={styles.linkTitle}>Transforming Ideas Into Mockups</p>
              <div className={styles.linkDescriptionContainer}>
                <h5 className={styles.linkDescriptionHeader}>SGInnovate</h5>
                <p className={styles.linkDescriptionText}>Product Management Intern</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
