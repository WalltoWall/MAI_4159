import React from 'react'
import { graphql } from 'gatsby'
import { SideBySideImages } from 'components/SideBySideImages'

export const ProjectLayoutSideBySideImages = ({ data }) => {
  return <SideBySideImages data={data} />
}

export const query = graphql`
  fragment ProjectLayoutSideBySideImages on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideImages {
            id
            items {
              image1 {
                alt
                fluid(maxWidth: 1000) {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
            primary {
              caption {
                text
              }
            }
          }
        }
      }
    }
  }
`
