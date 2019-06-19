import React from 'react'
import { graphql } from 'gatsby'
import { SpacingModifier } from 'src/components/SpacingModifier'

export const PageLayoutSpacingModifier = () => {
  return <SpacingModifier />
}

export const query = graphql`
  fragment PageLayoutSpacingModifier on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSpacingModifier {
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
