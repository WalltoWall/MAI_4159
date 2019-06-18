import React from 'react'
import GatsbyImage from 'gatsby-image'

export const Image = ({
  src,
  fluid,
  objectFit = 'cover',
  objectPosition = '50% 50%',
  ...props
}) =>
  fluid ? (
    <GatsbyImage
      {...props}
      fluid={fluid}
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
      height="100%"
      src={src}
      loading="lazy"
      style={{
        fontFamily: `"object-fit: ${objectFit}; object-position: ${objectPosition}"`,
        objectFit: objectFit,
        objectPosition: objectPosition,
      }}
    />
  )
