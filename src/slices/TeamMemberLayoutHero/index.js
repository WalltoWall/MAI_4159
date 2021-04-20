import React from 'react'
import { graphql } from 'gatsby'
import { Hero } from 'components/Hero'

export const TeamMemberLayoutHero = ({ data }) => (
  <Hero whitebg="true" data={data} />
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
                fluid(maxWidth: 1000) {
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
