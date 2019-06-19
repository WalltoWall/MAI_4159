import React from 'react'
import { SideBySideTextImage } from 'src/components/SideBySideTextImage'

export const NewsPostLayoutSideBySideTextImage = ({ data }) => (
  <SideBySideTextImage data={data} />
)

export const query = graphql`
  fragment NewsPostLayoutSideBySideTextImage on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutSideBySideTextImage {
            id
            primary {
              background_color
            }
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
