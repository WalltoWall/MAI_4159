import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, HomeLink } from './index.styled'

const render = () => queryData => (
    get(queryData, 'prismicNavigation.data.primary', []).map(nav_item => (
        <HomeLink to={get(nav_item, `primary.link.url`)} key={`id`}>
            {get(nav_item, 'primary.name')}
        </HomeLink>
    ))
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
    render={render(props)}
  />
)
