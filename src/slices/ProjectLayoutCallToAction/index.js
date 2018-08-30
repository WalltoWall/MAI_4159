import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container } from './index.styled'
export const ProjectLayoutCallToAction = ({ data }) => (
  <Container>
    Hello World
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutCallToAction on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutCallToAction {
            id
          }
        }
      }
    }
  }
`