import { React } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {

    return (
    <div className={styles.main}>
        <h1 className={styles.header}>Hello, I'm Annette!</h1>
        <img className={styles.picture} src="/AnnetteLoke/profile_picture.png" />
        <p className={styles.text}>
        I am currently a student in Singapore, approaching graduation and eager to embark on my professional 
journey in UI/UX design. I’m actively seeking opportunities to apply my skills and contribute to exciting 
projects. </p>
        <p className={styles.text}>Feel free to reach out if you’d like to connect or learn more about my design experience for far! I am always excited to share more about my work with you.
        </p>
        <div className={styles.socialsRow}>
            <a href="https://www.linkedin.com/in/annetteloke/">
                <img className={styles.socialLinkImg} src="/AnnetteLoke/linkedin.png" />
            </a>
            <Link href="mailto:annettelxh@gmail.com">
                <img className={styles.socialLinkImg} src="/AnnetteLoke/email.png" />
            </Link>
        </div>
        <img style={{ transform: 'rotate(-40deg)', right: '19%', bottom: '38%' }} className={styles.icon} src="/AnnetteLoke/paw.png" />
        <img style={{ right: '30%', bottom: '50%' }} className={styles.icon} src="/AnnetteLoke/badminton.png" />
        <img style={{ right: '73%', bottom: '38%' }} className={styles.icon} src="/AnnetteLoke/croissant.png" />
        <img style={{ right: '75%', bottom: '68%', width: 'calc(3rem + 3vw)' }} className={styles.icon} src="/AnnetteLoke/tennis.png" />
        <img style={{ transform: 'rotate(-10deg)', width: 'calc(3rem + 3vw)', right: '25%', bottom: '75%' }} className={styles.icon} src="/AnnetteLoke/takoyaki.png" />
    </div>
  )
}
