import React from 'react'
import { graphql } from 'gatsby'
import { CmsGuideText } from 'components/CmsGuideText'

export const PageLayoutCmsGuideText = ({ data }) => <CmsGuideText data={data} />

export const query = graphql`
  fragment PageLayoutCmsGuideText on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCmsGuideText {
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
