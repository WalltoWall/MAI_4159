import React from 'react'
import { graphql } from 'gatsby'
import { CmsGuideText } from 'components/CmsGuideText'

export const TeamMemberLayoutCmsGuideText = ({ data }) => (
  <CmsGuideText data={data} />
)

export const query = graphql`
  fragment TeamMemberLayoutCmsGuideText on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutCmsGuideText {
            id
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`
