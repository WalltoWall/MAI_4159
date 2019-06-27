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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
