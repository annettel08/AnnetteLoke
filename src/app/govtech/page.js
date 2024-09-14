import React from 'react'
import styles from './page.module.css'

export default function page() {
  return (
    <div className={styles.main}>
        <div className={styles.topRow}>
            <p>Internship at GovTech</p>
            <p>.</p>
            <p>Anti-Scam Product Design Intern</p>
        </div>
        <h1 className={styles.title}>Disrupting over 42000 potentially harmful scam sites, safeguarding Singapore’s digital space </h1>
        <div className={styles.alertContainer}>
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill-rule="nonzero"/></svg>
            <p>Some details of this project have been left out due to its sensitive nature. I would love to share more  about my work on a call!</p>
        </div>
        <div className={styles.section}>
            <h2 className={styles.header}>Overview</h2>
            <p className={styles.text}>SATIS is a platform by Govtech that protects web users from scam websites. When I joined,  the platform had some basic features in place
 and the team was in the process of adding more features to enhance the platform’s capabilities. Over 6 months, I designed new features 
and redesigned existing features on SATIS. </p>
            <p>My goal was to <strong>maintain ease of use of the platform while integrating more complex features</strong> to improve the platform's capabilities.</p>
        </div>
        <div className={styles.section}>
            <h2 className={styles.header}>Contributions</h2>
            <ul className={styles.list}>
                <li>Requirements Gathering</li>
                <li>User Interface Design</li>
                <li>Prototyping</li>
                <li>Interaction Design</li>
                <li>User Testing</li>
            </ul>
        </div>
    </div>
  )
}
