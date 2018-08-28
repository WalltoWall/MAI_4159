import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, StyledLink } from './index.styled'

export const PageLayoutCategoriesBar = ({data}) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <StyledLink key={get(item, 'name.text')} to={get(item, 'url.url', '/')}   >
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