'use client'

import { React, useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import styles from './page.module.css'
import Link from 'next/link';

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
      const [section5Ref, section5InView] = useInView({ triggerOnce: true });
      const [section6Ref, section6InView] = useInView({ triggerOnce: true });
      const [section7Ref, section7InView] = useInView({ triggerOnce: true });

    return (
    <div className={styles.main}>
        <div className={styles.topRow}>
            <p>Internship at SGInnovate</p>
            <p>.</p>
            <p>Product Management Intern</p>
        </div>
        <h1 className={styles.title}>Transforming ideas into designs and mockups that inspire the next step</h1>
        <div className={styles.alertContainer}>
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill-rule="nonzero"/></svg>
            <p>Some details of this project have been left out due to its sensitive nature. I would love to share more  about my work on a call!</p>
        </div>
        <div 
            ref={section1Ref}
            className={`${styles.section} ${section1InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Background</h2>
            <p className={styles.text}>During my product management internship, I was given the opportunity to create mockups for the next phase of the project.</p>
            <p className={styles.text}>I expressed my desire to contribute to the design efforts due to my growing interest in UI/UX Design. During my product management 
internship, I frequently liaised and worked with the design team which gave me valuable insights into their workflow and design processes. 
Observing their methods and how they communicated their design decisions to stakeholders deepened my understanding of UI/UX 
principles. </p>
            <p className={styles.text}>Thus, I wanted to make a significant step and <strong>transition from observing to actively participating in design.</strong></p>
        </div>
        <div
            ref={section2Ref}
            className={`${styles.section} ${section2InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Problem</h2>
            <p className={styles.text}>
            SGInnovate aims to accelerate growth and forge connections to build a thriving Deep Tech economy in Singapore. There is currently a 
platform for students and prospective workers to apply for working opportunities with SGInnovate-recognised industry players. However, 
there is still untapped potential to strengthen and increase interactions in the Deep-tech economy in Singapore.
            </p>
            <div className={styles.smallContainer}>
                <h3 className={styles.smallContainerHeader}>1. E-learning module</h3>
                <p>To <span className={styles.red}>increase interest in the Deep-tech industry</span> and to cater to those looking for a career switch. This is 
                done by allowing mentors (recognised industry experts) to <span className={styles.red}>upload videos</span> for mentees to watch.</p>
            </div>
            <div className={styles.smallContainer}>
                <h3 className={styles.smallContainerHeader}>2. Interest Groups</h3>
                <p>To <span className={styles.purple}>increase interactions between experts and prospective employees</span> by allowing both groups to
                <span className={styles.purple}>interact and exchange insights</span> within specialised interest groups.</p>
            </div>
        </div>
        <div
            ref={section3Ref}
            className={`${styles.section} ${section3InView ? styles.fadeIn : ''}`}
        >
            <div className={styles.splitRow}>
                <div className={styles.splitRowContainer}>
                    <h2 className={styles.header}>Role</h2>
                    <p className={styles.text}>
                        I ideated and designed the mocks ups by myself, while
                        consulting the Lead Designer on design decisions.
                    </p>
                </div>
                <div style={{ background: '#E6F6FF' }}  className={styles.splitRowContainer}>
                    <h2 className={styles.header}>Contributions</h2>
                    <ul className={styles.list}>
                        <li>Requirements Gathering</li>
                        <li>Prototyping</li>
                        <li>User Interface Design</li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            ref={section4Ref}
            className={`${styles.section} ${section4InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Design Process</h2>
            <p className={styles.text}>
                Since these designs were intended to illustrate potential future directions for the project, user testing and implementation were not needed.
            </p>
            <img className={styles.picture} src="/AnnetteLoke/sginnovate_design_process.png" />
            <p className={styles.text}>
            As part of the product management team, I consulted other stakeholders within the company and industry to create a rough set of user 
requirements. Using these requirements, I drew <strong>paper prototypes and made wireframes</strong>. I then discussed my design decisions together 
with the Lead Designer, and <strong>iterated</strong> my designs until they were ready to be used.
            </p>

        </div>
        <div
            ref={section5Ref}
            className={`${styles.section} ${section5InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Design Sample: E-learning</h2>
            <img className={styles.picture} src="/AnnetteLoke/design_sample_e-learning.png" />
        </div>
        <div
            ref={section6Ref}
            className={`${styles.section} ${section6InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Design Sample: Interest Groups</h2>
            <img className={styles.picture} src="/AnnetteLoke/design_sample_interest-group.png" />
            <p className={styles.subtitle}>
                Proposed “Main Page” of the interest group module
            </p>
            <img className={styles.picture} src="/AnnetteLoke/design_sample_inside-interest-group.png" />
            <p className={styles.subtitle}>
                Proposed design of the specific interest group
            </p>
        </div>
        <div 
            ref={section7Ref}
            className={`${styles.section} ${section7InView ? styles.fadeIn : ''}`}
        >
            <h2 className={styles.header}>Reflection</h2>
            <p className={styles.text}>
            Although I had started off as a Product Management Intern, this opportunity to design the mockups turned out to be the most eye-opening 
and impactful experience of my internship. It was my first time <strong>applying UI/UX principles on a real-world product</strong> within a professional 
setting, and helped to solidify my interest in UI/UX design. 
            </p>
            <p className={styles.text}>I am immensely grateful to the Product team and the Lead Designer for welcoming my request to try designing, and for encouraging me to 
            explore my interests. This opportunity was pivotal in starting my design career, and I am excited to build on this foundation.</p>
        </div>
        <div className={styles.socialsRow}>
            <a href="https://www.linkedin.com/in/annetteloke/">
                <img className={styles.socialLinkImg} src="/AnnetteLoke/linkedin.png" />
            </a>
            <Link href="mailto:annettelxh@gmail.com">
                <img className={styles.socialLinkImg} src="/AnnetteLoke/email.png" />
            </Link>
        </div>
    </div>
  )
}
