import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'
import { ModalConsumer } from 'controllers/ModalContext'
import { searchModal } from 'components/Modal/searchModal'

import { Link } from '../Link'
import {
  Container,
  linkActiveClassName,
  NavList,
  NavArrow,
  navItemClassName,
  SearchButtonIcon,
} from './Desktop.styled'

const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    navItemClassName,
    isPathActive(pathname, href) && linkActiveClassName
  ),
})

const renderLink = item => (
  <Container key={item.id}>
    <NavArrow />
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
    <ModalConsumer>
      {({ showModal }) => (
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            showModal(searchModal)
          }}
        >
          <SearchButtonIcon />
        </a>
      )}
    </ModalConsumer>
  </NavList>
)

export const Desktop = props => (
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
