import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container } from './index.styled'
export const ProjectLayoutSideBySideImages = ({ data }) => (
  <Container>
    Hello World
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutSideBySideImages on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideImages {
            id
          }
        }
      }
    }
  }
`