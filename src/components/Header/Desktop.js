import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'

import {
  Container,
  linkActiveClassName,
  NavList,
  NavArrow,
  NavItem,
} from './NavItem.styled'


const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    NavItem,
    isPathActive(pathname, href) && linkActiveClassName,
  ),
})

const renderLink = item => (
  <Container>
    <NavArrow/>
    <NavItem key={get(item, 'id')} to={get(item, 'primary.link.url')} getProps={getLinkProps()}>
      {get(item, 'primary.name')}
    </NavItem>
  </Container>
)

const render = () => queryData => (
  <NavList>
    {get(queryData, 'prismicNavigation.data.primary', []).map(renderLink)}
  </NavList>
)

export const Desktop = (props) => (
  <StaticQuery
    query={graphql`
      query {
        prismicNavigation {
          data {
            primary {
              id
              primary {
                name
                link {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={render()}
  />
)
