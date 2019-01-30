import React from 'react'
import { graphql } from 'gatsby'
import { TextBlock } from 'components/TextBlock'

export const NewsPostLayoutTextBlock = ({ data }) => {
  return <TextBlock data={data} />
}

export const query = graphql`
  fragment NewsPostLayoutTextBlock on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        article_title1 {
          text
        }
        publish_date
        layout {
          ... on PrismicNewsPostLayoutTextBlock {
            id
            primary {
              background_color
              align_text
              content {
                html
              }
            }
          }
        }
      }
    }
  }
`
