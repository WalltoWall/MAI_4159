import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

export const PageLayoutTeamGrid = ({ data }) => {
  let teamMembers = data.items
  return (
    <>
      {teamMembers.map(member => (
        <span>{get(member, 'team_member.document[0].data.name')}</span>
      ))}
    </>
  )
}

export const query = graphql`
  fragment PageLayoutTeamGrid on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutTeamGrid {
            id
            items {
              team_member {
                url
                document {
                  data {
                    name
                    job_title
                    department
                    photo {
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 600, quality: 90) {
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
      }
    }
  }
`
