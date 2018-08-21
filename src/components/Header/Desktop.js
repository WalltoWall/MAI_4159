import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import { NavItem } from 'components/Header/NavItem'
import { Container, HomeLink, NavList } from './index.styled'


const renderLink = item => (
    <NavItem
      key={get(item, 'id')}
      name={get(item, 'primary.name')}
      to={get(item, 'primary.link.url')}
    >
    </NavItem>
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
