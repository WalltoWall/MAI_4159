import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const ProjectLayoutCmsHero = ({ data, subpage }) => (
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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1400, quality: 90) {
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
