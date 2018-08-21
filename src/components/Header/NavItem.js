import React from 'react'
import { Toggle } from 'react-powerplug'
import classnames from 'classnames'

import { isPathActive } from 'lib/helpers'
import { Link } from 'components/Link'
import {
  Container,
  linkClassName,
  linkActiveClassName,
} from './NavItem.styled'

const getLinkProps = secondary => ({ href, location: { pathname } }) => ({
  className: classnames(
    linkClassName(secondary),
    isPathActive(pathname, href) && linkActiveClassName(secondary)
  ),
})

export const NavItem = ({
  name,
  to = '/',
  secondary = false,
  ...props
}) => (
  <Toggle>
    {({ on, set }) => (
      <Container
        secondary={secondary}
        onMouseOver={() => set(true)}
        onMouseOut={() => set(false)}
      >
        <Link
          to={to}
          onClick={() => set(false)}
          getProps={getLinkProps(secondary)}
        >
          {name}
        </Link>
      </Container>
    )}
  </Toggle>
)
