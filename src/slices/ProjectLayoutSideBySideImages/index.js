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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
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
