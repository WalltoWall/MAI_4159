import React from 'react'
import { Toggle } from 'react-powerplug'
import classnames from 'classnames'

import { isPathActive } from 'lib/helpers'
import { Link } from '../Link'
import {
  Container,
  linkActiveClassName,
} from './NavItem.styled'

const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    isPathActive(pathname, href) && linkActiveClassName
  ),
})

export const NavItem = ({
  name,
  to = '/',
  isActive = false,
  ...props
}) => (
  <Toggle>
    {({ on, set }) => ( 
      <Container
        isActive={isActive}
        onMouseOver={() => set(true)}
        onMouseOut={() => set(false)}
      >
        <Link
          to={to}
          onClick={() => set(false)}
          getProps={getLinkProps()}
        >
          {name}
        </Link>
      </Container>
    )}
  </Toggle>
)
