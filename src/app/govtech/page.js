'use client'

import { React, useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import styles from './page.module.css'

export default function page() {
    
    function useInView(options) {
        const [inView, setInView] = useState(false);
        const ref = useRef(null);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            options
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          };
        }, [options]);
      
        return [ref, inView];
      }

      const [section1Ref, section1InView] = useInView({ triggerOnce: true });
      const [section2Ref, section2InView] = useInView({ triggerOnce: true });
      const [section3Ref, section3InView] = useInView({ triggerOnce: true });
      const [section4Ref, section4InView] = useInView({ triggerOnce: true });

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
        <div 
            ref={section1Ref}
            className={`${styles.section} ${section1InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Overview</h2>
            <p className={styles.text}>SATIS is a platform by Govtech that protects web users from scam websites. When I joined,  the platform had some basic features in place
 and the team was in the process of adding more features to enhance the platform’s capabilities. Over 6 months, I designed new features 
and redesigned existing features on SATIS. </p>
            <p>My goal was to <strong>maintain ease of use of the platform while integrating more complex features</strong> to improve the platform's capabilities.</p>
        </div>
        <div
            ref={section2Ref}
            className={`${styles.section} ${section2InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Contributions</h2>
            <ul className={styles.list}>
                <li>Requirements Gathering</li>
                <li>User Interface Design</li>
                <li>Prototyping</li>
                <li>Interaction Design</li>
                <li>User Testing</li>
            </ul>
        </div>
        <div
            ref={section3Ref}
            className={`${styles.section} ${section3InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Design Process</h2>
            <img className={styles.picture} src="/govtech_design_process.png" />
            <p className={styles.text}>
                As an intern, I was assigned tasks from my mentor. These tasks could be <strong>standalone features or entire sections</strong> that needed to be designed.
            </p>
            <p className={styles.text}>
                Given my prior experience in the product management internship and the Google course on UI/UX Design, my mentor allowed me to take 
                charge of my design process while giving me guidance and advice on the side. 
            </p>
            <p className={styles.text}>
                A huge part of my design process is spent on the Design and Review stages, where I would <strong>constantly iterate</strong> my designs based on the
                feedback given by my mentor and the users. Initially, I faced difficulties and this process felt daunting but it also turned out to be where I
                gained the most insights.
            </p>
            <p className={styles.text}>
                As my internship progressed, I was able to witness my own <strong>improvement</strong> through my approach to <strong>user-centred designs</strong>, and from my <strong>enhanced problem-solving skills</strong>. I also gained confidence to plan, organise, and <strong>lead user testing sessions</strong> on my own. 
            </p>
        </div>
        <div
            ref={section4Ref}
            className={`${styles.section} ${section4InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Reflection</h2>
            <p className={styles.text}>
            This internship was extremely <strong>fulfilling and insightful</strong> for me as I had the opportunity to contribute and design many aspects of the 
platform. I am very thankful to my mentor who was generous with their feedback and advice, and encouraged me to push my own 
boundaries. The success and importance of this platform as a crucial part to protecting millions of Singaporeans against online scams is a 
testament to its improved (and potential) capabilities. It fills me with joy and honour to be able to improve the user experience of this
platform, and I will hold these experiences close to my heart.
            </p>
        </div>
    </div>
  )
}
