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
            <Link className={styles.link} href={'/'}>About</Link>
            <Link className={styles.link} href={'/#resume'}>Resume</Link>
            <Link className={styles.link} href={'/contact'}>Contact</Link>
        </div>
    </nav>
  )
}
