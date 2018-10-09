import React from 'react'
import { graphql } from 'gatsby'
import { TextBlock } from 'components/TextBlock'

export const NewsPostLayoutTextBlock = ({ data }) => {
  return (
    <TextBlock data={data}/>
  )
}

export const query = graphql`
  fragment NewsPostLayoutTextBlock on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutTextBlock {
            id
            primary {
              background_color
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
