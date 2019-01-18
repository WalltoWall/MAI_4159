import React from 'react'
import { graphql } from 'gatsby'
import { TextBlock } from 'components/TextBlock'

export const TeamMemberLayoutTextBlock = ({ data }) => <TextBlock data={data} />

export const query = graphql`
  fragment TeamMemberLayoutTextBlock on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutTextBlock {
            id
            primary {
              content {
                html
              }
              background_color
              align_text
            }
          }
        }
      }
    }
  }
`
