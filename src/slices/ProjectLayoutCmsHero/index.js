import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const ProjectLayoutCmsHero = ({ data }) => (
  <>
    <Hero data={data} subpage={true} />
  </>
)

export const query = graphql`
  fragment ProjectLayoutCmsHero on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutCmsHero {
            id
            primary {
              title1 {
                text
              }
              has_filter
              image {
                alt
                fluid(maxWidth: 1250) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
