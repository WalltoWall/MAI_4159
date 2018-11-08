import React from 'react'
import { graphql } from 'gatsby'
import { CmsGuideText } from 'components/CmsGuideText'

export const NewsPostLayoutCmsGuideText = ({ data }) => (
  <CmsGuideText data={data} />  
)

export const query = graphql`
  fragment NewsPostLayoutCmsGuideText on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutCmsGuideText {
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