import React from 'react'
import { graphql } from 'gatsby'
import { CtaBar } from 'components/CtaBar'
import { get } from 'lodash'

export const TeamMemberLayoutCtaBar = ({ data }) => (
  <CtaBar
    title={get(data, 'primary.title2.text')}
    buttonUrl={get(data, 'primary.button1.url')}
    buttonText={'Contact Us'}
    background={'dark'}
  />
)

export const query = graphql`
  fragment TeamMemberLayoutCtaBar on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutCtaBar {
            id
            primary {
              title2 {
                text
              }
              button1 {
                url
              }
            }
          }
        }
      }
    }
  }
`
