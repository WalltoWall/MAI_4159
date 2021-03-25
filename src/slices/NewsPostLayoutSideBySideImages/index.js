import React from 'react'
import { graphql } from 'gatsby'
import { SideBySideImages } from 'components/SideBySideImages'

export const NewsPostLayoutSideBySideImages = ({ data }) => {
  return <SideBySideImages data={data} />
}

export const query = graphql`
  fragment NewsPostLayoutSideBySideImages on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutSideBySideImages {
            id
            items {
              image1 {
                alt
                fluid(maxWidth: 800) {
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
