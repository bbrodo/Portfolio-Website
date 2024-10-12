import React from 'react'

import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" />
                <a href='mailto:brodey880@gmail.com'>brodey880@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin icon" />
                <a href='https://https://www.linkedin.com/in/brodeybright/'>linkedin.com/brodeybright</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="github icon"  />
                <a href='https://github.com/bbrodo'>github.com/bbrodo</a>
            </li>
        </ul>
    </footer>
  )
}
