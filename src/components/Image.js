import React from 'react'
import GatsbyImage from 'gatsby-image'

export const Image = ({
  src,
  alt,
  fluid,
  objectFit = 'cover',
  objectPosition = '50% 50%',
  ...props
}) =>
  fluid ? (
    <GatsbyImage
      {...props}
      fluid={fluid}
      alt={alt}
      loading="eager"
      fadeIn={false}
      imgStyle={{
        ...props.imgStyle,
        objectFit,
        objectPosition,
        fontFamily: `"object-fit: ${objectFit}; object-position: ${objectPosition}"`,
      }}
    />
  ) : (
    <img
      {...props}
      width="100%"
      alt={alt}
      height="100%"
      src={src}
      loading="eager"
      style={{
        fontFamily: `"object-fit: ${objectFit}; object-position: ${objectPosition}"`,
        objectFit: objectFit,
        objectPosition: objectPosition,
      }}
    />
  )
