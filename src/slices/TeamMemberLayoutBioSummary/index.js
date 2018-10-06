import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'

export const TeamMemberLayoutBioSummary = ({ data }) => {
  return (
    <h1>hello wowlrd </h1>
  )
}

export const query = graphql`
  fragment TeamMemberLayoutBioSummary on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutBioSummary {
            id
            primary {
              name1
              position
              email
              quote {
                text
              }
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
            items {
              social_media_type
              social_media_link {
                url
              }
            }            
          }
        }
      }
    }
  }
`
