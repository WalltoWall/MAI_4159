import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, StyledLink, categoryClassName, linkActiveClassName } from './index.styled'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'

const getLinkProps = () => ({ href, location: { pathname } }) => ({
  className: classnames(
    categoryClassName,
    isPathActive(pathname, href) && linkActiveClassName,
  ),
})

export const PageLayoutCategoriesBar = ({data}) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <StyledLink
        to={get(item, 'url1.url', '/')}
        getProps={getLinkProps()}
        >
        {get(item, 'name.text')}              
      </StyledLink>
    ))}
  </Container>
)

export const query = graphql`
  fragment PageLayoutCategoriesBar on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCategoriesBar {
            id
            items {
              name {
                text
              }
              url1 {
                url
              }
            }
          }
        }
      }
    }
  }
`