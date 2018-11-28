import React from 'react'
import { graphql } from 'gatsby'
import { SideBySideImages } from 'components/SideBySideImages'

export const PageLayoutSideBySideImages = ({ data }) => {
  return (
    <SideBySideImages data={data}/>
  )
}

export const query = graphql`
  fragment PageLayoutSideBySideImages on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSideBySideImages {
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
