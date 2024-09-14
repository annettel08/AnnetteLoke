import { Nav } from "@/components/Nav";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroText}>Hello! I'm Annette, a</h1>
            <h2 className={styles.heroText}><span className={styles.uxDesigner}>UX Designer</span>.</h2>
            <p className={styles.description}>
            Currently finishing my last year as an Economics student at the National University of Singapore. I have previously held internships at <Link className={styles.link} href={'/#govtech'} sx={{ display: 'inline' }}>GovTech</Link> and <Link className={styles.link} href={'/#sginnovate'} sx={{ display: 'inline' }}>SGInnovate</Link> - do check my work out!
            </p>
          </div>
          <img className={styles.profilePicture} src="/profile_pic_main.jpg" />
        </div>

        <div className={styles.linksContainer}>
          <Link className={styles.linkContainerLink} href={'/govtech'} id="govtech">
            <p className={styles.linkTitle}>Internship at GovTech</p>
            <img className={styles.linkImg} src="/govtech.jpg" />
            <div className={styles.linkDescriptionContainer}>
              <h5 className={styles.linkDescriptionHeader}>Anti-Scam Product Design Intern</h5>
              <p className={styles.linkDescriptionText}>Over 6 months, I helped to design a platform that hunts and disrupts scams sites</p>
            </div>
          </Link>

          <Link className={styles.linkContainerLink} href={'/sginnovate'} id="sginnovate">
            <p className={styles.linkTitle}>Internship at SGInnovate</p>
            <img className={styles.linkImg} src="/sginnovate.jpeg" />
            <div className={styles.linkDescriptionContainer}>
              <h5 className={styles.linkDescriptionHeader}>Product Management Intern</h5>
              <p className={styles.linkDescriptionText}>I led the design for a section of the company's landing page</p>
            </div>
          </Link>
        </div>
        <div className={styles.socialsRow}>
            <a href="https://www.linkedin.com/in/annetteloke/">
                <img className={styles.socialLinkImg} src="/linkedin.png" />
            </a>
            <a href="mailto:annettelxh@gmail.com">
                <img className={styles.socialLinkImg} src="/email.png" />
            </a>
        </div>
      </div>
    </main>
  );
}
