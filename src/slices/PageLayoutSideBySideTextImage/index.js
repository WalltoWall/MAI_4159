import React from 'react'
import { graphql } from 'gatsby'
import { SideBySideTextImage } from 'src/components/SideBySideTextImage'

export const PageLayoutSideBySideTextImage = ({ data }) => (
  <SideBySideTextImage data={data} />
)

export const query = graphql`
  fragment PageLayoutSideBySideTextImage on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSideBySideTextImage {
            id
            primary {
              background_color
            }
            items {
              image_position
              image {
                alt
                fluid(maxWidth: 800) {
                  ...GatsbyPrismicImageFluid
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
