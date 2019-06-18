import React from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import qs from 'querystring'
import { getSearchQuery } from 'helpers'
import { Location } from '@reach/router'
import { get } from 'lodash'
import { Container } from './Mobile.styled'
import { MobileNavItem } from './MobileNavItem.js'
import { SearchBarTemp } from 'components/SearchBar'
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
    {get(queryData, 'prismicNavigation.data.primary', []).map(
      renderLink(toggle)
    )}
    <Location>
      {({ location }) => {
        return (
          <SearchBarTemp
            query={getSearchQuery('?query', location)}
            onSubmit={({ query }) => {
              navigate(`/search${query ? `?${qs.stringify({ query })}` : ''}`)
              toggle()
            }}
          />
        )
      }}
    </Location>
  </Container>
)

export const Mobile = props => (
  <StaticQuery
    query={graphql`
      query {
        prismicNavigation {
          data {
            primary {
              ... on PrismicNavigationPrimaryNavItem {
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
      }
    `}
    render={render(props)}
  />
)
