import React from 'react'
import { graphql } from 'gatsby'
import { TextBlock } from 'components/TextBlock'

export const PageLayoutTextBlock = ({ data }) => {
  return <TextBlock data={data} />
}

export const query = graphql`
  fragment PageLayoutTextBlock on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutTextBlock {
            id
            primary {
              content {
                html
              }
              background_color
              align_text
              button_text
              button_link {
                url
              }              
            }
          }
        }
      }
    }
  }
`
