import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, List } from './Mobile.styled'
import { MobileNavItem } from './MobileNavItem.js'

const renderLink = toggleMobileNav => item => (
  
  <MobileNavItem
    key={get(item, 'id')}
    name={get(item, 'primary.name')}
    to={get(item, 'primary.link.url')}
    toggleMobileNav={toggleMobileNav}
  />
)

const render = ({ isOpen, toggle, ...props }) => queryData => (
  <Container isOpen={isOpen} {...props}>
    <List>
        {get(queryData, 'prismicNavigation.data.primary', []).map(renderLink(toggle))}    
    </List>
  </Container>
)

export const Mobile = props => (
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
    render={render(props)}
  />
)
