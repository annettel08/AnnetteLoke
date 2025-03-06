import { React } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {

    return (
    <div className={styles.main}>
        <h1 className={styles.header}>Hello, I'm Annette!</h1>

        <div className={styles.aboutContainer}>
            <div className={styles.aboutTextContainer}>
                <p className={styles.text}>
                Graduating from NUS in May 2025, I am eager to embark on my professional journey in UI/UX design. 
                <br></br>
                <br></br>
                When I am not studying, I enjoy learning new languages and I try to bake sometimes.
                <br></br>
                <br></br>
                Fun fact: When I was 7, I named my dog “Rolex” because I hoped that he would be a watch dog!
                </p>


                <div className={styles.socialsRow}>
                    <a href="https://www.linkedin.com/in/annetteloke/">
                        <img className={styles.socialLinkImg} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/linkedin.png`} />
                    </a>
                    <Link href="mailto:annettelxh@gmail.com">
                        <img className={styles.socialLinkImg} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/email.png`} />
                    </Link>
                </div>
            </div>

            <img className={styles.picture} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/profile_picture.png`} />
        </div>


        <img className={styles.background} src={`${process.env.NODE_ENV === "development" ? "" : "/AnnetteLoke"}/fold-spot-gradient.png`} />



    </div>
  )
}
