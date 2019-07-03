import React from 'react'
import { graphql } from 'gatsby'
import { SpacingModifier } from 'src/components/SpacingModifier'

export const NewsPostLayoutSpacingModifier = () => {
  return <SpacingModifier />
}

export const query = graphql`
  fragment NewsPostLayoutSpacingModifier on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutSpacingModifier {
            id
          }
        }
      }
    }
  }
`
