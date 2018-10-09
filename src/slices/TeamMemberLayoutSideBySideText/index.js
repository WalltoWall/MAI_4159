import React from 'react'
import { graphql } from 'gatsby'
import { SideBySideText} from 'components/SideBySideText'

export const TeamMemberLayoutSideBySideText = ({ data }) => (
  <SideBySideText data={data} />
)
export const query = graphql`
  fragment TeamMemberLayoutSideBySideText on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutSideBySideText {
            id
            primary {
              left_text {
                html
              }
              right_text {
                html
              }
            }
          }
        }
      }
    }
  }
`
