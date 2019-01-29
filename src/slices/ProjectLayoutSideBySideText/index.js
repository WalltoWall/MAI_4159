import React from 'react'
import { graphql } from 'gatsby'
import { SideBySideText } from 'components/SideBySideText'

export const ProjectLayoutSideBySideText = ({ data }) => (
  <SideBySideText data={data} />
)
export const query = graphql`
  fragment ProjectLayoutSideBySideText on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideText {
            id
            primary {
              left_text {
                html
              }
              right_text {
                html
              }
            }
          }
        }
      }
    }
  }
`
