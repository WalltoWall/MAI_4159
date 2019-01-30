import React from 'react'
import { graphql } from 'gatsby'
import { Container } from './index.styled'

export const ProjectLayoutSpacingModifier = ({ data }) => {
  return <Container />
}

export const query = graphql`
  fragment ProjectLayoutSpacingModifier on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSpacingModifier {
            id
            primary {
              space
            }
          }
        }
      }
    }
  }
`
