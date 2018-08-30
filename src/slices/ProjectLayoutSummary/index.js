import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container } from './index.styled'
export const ProjectLayoutSummary = ({ data }) => (
  <Container>
    hello Summary
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutSummary on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSummary {
            id
          }
        }
      }
    }
  }
`