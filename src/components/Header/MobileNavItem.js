import React from 'react'
import { Toggle } from 'react-powerplug'
import classnames from 'classnames'
import { Link } from '../Link'
import { isPathActive } from 'lib/helpers'

import {
  Container,
  linkActiveClassName,
  StyledLinkClassName,
  NavArrow,
} from './MobileNavItem.styled'

const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    StyledLinkClassName,
    isPathActive(pathname, href) && linkActiveClassName
  ),
})

export const MobileNavItem = ({
  name,
  to = '/',
  toggleMobileNav = () => {},
  ...props
}) => (
  <Toggle>
    {({ on, set, toggle }) => (
      <Container>
        <NavArrow />
        <Link to={to} getProps={getLinkProps(on)} onClick={toggleMobileNav}>
          {name}
        </Link>
      </Container>
    )}
  </Toggle>
)

