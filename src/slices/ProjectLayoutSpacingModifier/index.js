import React from 'react'
import { graphql } from 'gatsby'
import { SpacingModifier } from 'src/components/SpacingModifier'

export const ProjectLayoutSpacingModifier = () => {
  return <SpacingModifier />
}

export const query = graphql`
  fragment ProjectLayoutSpacingModifier on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSpacingModifier {
            id
          }
        }
      }
    }
  }
`
