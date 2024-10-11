import React from 'react'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return <section>
    <div>
        <h1>Hi, I'm Brodey</h1>
        <p>I'm a full-stack developer with experience using React, NodeJS, Python and Psql. Reach out if you'd like to learn more!</p>
        <a href='mailto:brodey880@gmail.com'>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
  </section>
}
