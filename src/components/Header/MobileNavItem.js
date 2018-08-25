import React from 'react'
import { Toggle } from 'react-powerplug'
import classnames from 'classnames'

import { isPathActive } from 'lib/helpers'
import { Link } from 'components/Link'
import {
  Container,
  linkActiveClassName,
} from './MobileNavItem.styled'

const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    isPathActive(pathname, href) && linkActiveClassName,
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
        <Link
          to={to}
          getProps={getLinkProps(on)}
          onClick={toggleMobileNav}
        >
          {name}
        </Link>
      </Container>
    )}
  </Toggle>
)
