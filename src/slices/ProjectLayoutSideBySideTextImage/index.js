import React from 'react'
import { SideBySideTextImage } from 'src/components/SideBySideTextImage'

export const ProjectLayoutSideBySideTextImage = ({ data }) => (
  <SideBySideTextImage data={data} />
)

export const query = graphql`
  fragment ProjectLayoutSideBySideTextImage on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideTextImage {
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
                      ...GatsbyImageSharpFluid_withWebp
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
