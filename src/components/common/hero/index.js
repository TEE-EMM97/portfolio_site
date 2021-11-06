import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';

const Hero = (props) => {

  const image = props.blogHero;
  const imageAlt = props.author;

  return (
    <div>
      <GatsbyImage
        image={image}
        alt={imageAlt}
      />
    </div>
  )
}

export default Hero
