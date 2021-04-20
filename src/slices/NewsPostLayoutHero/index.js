import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const NewsPostLayoutHero = ({ data }) => (
  <Hero data={data} whitebg={true} />
)

export const query = graphql`
  fragment NewsPostLayoutHero on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutHero {
            id
            primary {
              title1 {
                text
              }
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
