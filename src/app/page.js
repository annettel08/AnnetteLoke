import { Nav } from "@/components/Nav";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.body}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroText}>Hello! I'm Annette, a</h1>
            <h2 className={styles.heroText}><span className={styles.uxDesigner}>Cutie Pie</span>.</h2>
            <p className={styles.description}>
            Currently finishing my last year as an Economics student at the National University of Singapore. I have previously held internships at <Link className={styles.link} href={'/#govtech'} sx={{ display: 'inline' }}>GovTech</Link> and <Link className={styles.link} href={'/#sginnovate'} sx={{ display: 'inline' }}>SGInnovate</Link> - do check my work out!
            </p>
          </div>
          <img className={styles.profilePicture} src="/profile_picture.png" />
        </div>

        <div className={styles.linksContainer}>
          <Link className={styles.linkContainerLink} href={'/govtech'}>
            <p className={styles.linkTitle}>Internship at GovTech</p>
            <img className={styles.linkImg} src="/govtech.jpg" />
          </Link>

          <Link className={styles.linkContainerLink} href={'/govtech'}>
            <p className={styles.linkTitle}>Internship at GovTech</p>
            <img className={styles.linkImg} src="/sginnovate.jpeg" />
          </Link>
        </div>
      </div>
    </main>
  );
}
