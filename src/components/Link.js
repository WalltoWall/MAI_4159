import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export const Link = ({ to, children, ...props }) => {
  if (to && to.startsWith('/')) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  } else {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    )
  }
}
