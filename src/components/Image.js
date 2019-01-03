import React from 'react'
import GatsbyImage from 'gatsby-image'

export const Image = ({
  fluid,
  objectFit = 'cover',
  objectPosition = '50% 50%',
  ...props
}) => fluid ? (
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
) : null
