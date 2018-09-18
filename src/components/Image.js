import React from 'react'
import GatsbyImage from 'gatsby-image'

export const Image = ({
  objectFit = 'cover',
  objectPosition = '50% 50%',
  ...props
}) => (
  <GatsbyImage
    {...props}
    imgStyle={{
      ...props.imgStyle,
      objectFit,
      objectPosition,
      fontFamily: `"object-fit: ${objectFit}; object-position: ${objectPosition}"`,
    }}
  />
)
