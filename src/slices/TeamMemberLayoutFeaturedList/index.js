import React from 'react'
import { graphql } from 'gatsby'

export const TeamMemberLayoutFeaturedList = ({ data }) => (
  <h1>hello feature list</h1>
)
export const query = graphql`
  fragment TeamMemberLayoutFeaturedList on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutFeaturedList {
            id          
          }
        }
      }
    }
  }
`
