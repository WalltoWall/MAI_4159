import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const PageLayoutSubPageHero = ({ data }) => {
  return <Hero data={data} subpage={true} whitebg={true} />
}

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
