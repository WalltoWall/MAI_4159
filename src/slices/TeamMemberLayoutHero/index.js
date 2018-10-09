import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const TeamMemberLayoutHero = ({ data }) => (
  <Hero data={data}/>
)

export const query = graphql`
  fragment TeamMemberLayoutHero on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutHero {
            id
            primary {
              title1
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
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
