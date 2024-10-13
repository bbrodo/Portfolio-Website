import React, {useState} from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id='#'>
      <a className={styles.title} href="/">
      Portfolio
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
          src={
            menuOpen 
              ? getImageUrl("nav/closeIcon.png") 
              : getImageUrl("nav/menuIcon.png")
            } 
            alt='menu-btn'
            onClick={() => setMenuOpen(!menuOpen)}
            />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
          <li className={styles.link}>
            <a href="#about">About</a>
          </li>
          <li className={styles.link}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.link}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.link}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
