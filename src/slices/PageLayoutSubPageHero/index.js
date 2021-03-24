import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const PageLayoutSubPageHero = ({ data }) => (
  <>
    <Hero data={data} subpage={true} />
  </>
)

export const query = graphql`
  fragment PageLayoutSubPageHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSubPageHero {
            id
            primary {
              title1 {
                text
              }
              has_filter
              image {
                alt
                fluid(maxWidth: 1000) {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
