import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, ...props }) =>
  to && to.startsWith('/') ? (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  )

export default Link