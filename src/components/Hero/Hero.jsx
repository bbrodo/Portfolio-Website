import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './Hero.module.css'

export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Brodey</h1>
        <p className={styles.description}>I'm a full-stack developer with experience using React, NodeJS, Flask and Psql. Reach out if you'd like to learn more!</p>
        <a href='mailto:brodey880@gmail.com' className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/asdsdsds.jpg")} alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  )
}
