import React from 'react'
import { graphql } from 'gatsby'
import { SpacingModifier } from 'src/components/SpacingModifier'

export const TeamMemberLayoutSpacingModifier = () => {
  return <SpacingModifier />
}

export const query = graphql`
  fragment TeamMemberLayoutSpacingModifier on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutSpacingModifier {
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
