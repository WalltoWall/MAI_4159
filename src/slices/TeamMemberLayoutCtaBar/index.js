import React from 'react'
import { graphql } from 'gatsby'

export const TeamMemberLayoutCtaBar = ({ data }) => (
  <h1>hello cta bar</h1>
)

export const query = graphql`
  fragment TeamMemberLayoutCtaBar on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutCtaBar {
            id          
          }
        }
      }
    }
  }
`
