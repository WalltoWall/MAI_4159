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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
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
