import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, StyledLink } from './index.styled'

export const ProjectBodyCategories = ({data}) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <StyledLink key={get(item, 'name.text')} to={get(item, 'url.url', '/')}   >
        {get(item, 'name.text')}              
      </StyledLink>
    ))}
  </Container>
)

export const query = graphql`
  fragment ProjectBodyCategories on Query {
    prismicProject(id: { eq: $id }) {
      data {
        body {
          ... on PrismicProjectBodyCategories {
            id
            items {
              name {
                text
              }
              url {
                url
              }
            }
          }
        }
      }
    }
  }
`