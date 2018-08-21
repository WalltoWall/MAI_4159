import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'
import { Link } from '../Link'
import {
  Container,
  linkActiveClassName,
  NavList,
  NavArrow,
  navItemClassName,
} from './Desktop.styled'


const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    navItemClassName,
    isPathActive(pathname, href) && linkActiveClassName,
  ),
})

const renderLink = item => (
  <Container>
    <NavArrow/>
    <Link 
      key={get(item, 'id')} 
      to={get(item, 'primary.link.url')} 
      getProps={getLinkProps()}
    >
      {get(item, 'primary.name')}
    </Link>
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
