import React from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
        <Link href={'/'}>
            <Image src={'/logo.png'} width={57} height={50} alt="logo" priority />
        </Link>
        <div className={styles.linkContainer}>
            <Link className={styles.link} href={'/about-us'}>About</Link>
            <a className={styles.link} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <Link className={styles.link} href={'mailto:annettelxh@gmail.com'}>Contact</Link>
        </div>
    </nav>
  )
}
