import React from 'react'
import { SideBySideTextImage } from 'src/components/SideBySideTextImage'

export const TeamMemberLayoutSideBySideTextImage = ({ data }) => (
  <SideBySideTextImage data={data} />
)

export const query = graphql`
  fragment TeamMemberLayoutSideBySideTextImage on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutSideBySideTextImage {
            id
            items {
              image_position
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              title_text
              body_text {
                html
              }
            }
          }
        }
      }
    }
  }
`
