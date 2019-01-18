import React from 'react'
import { graphql } from 'gatsby'
import { CmsGuideText } from 'components/CmsGuideText'

export const ProjectLayoutCmsGuideText = ({ data }) => (
  <CmsGuideText data={data} />
)

export const query = graphql`
  fragment ProjectLayoutCmsGuideText on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutCmsGuideText {
            id
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`
