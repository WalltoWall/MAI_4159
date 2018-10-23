import React from 'react'
import { graphql } from 'gatsby'

export const ProjectLayoutQuoteBlock = ({ data }) => (
  <div>hello world</div>
)

export const query = graphql`
  fragment ProjectLayoutQuoteBlock on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutQuoteBlock {
            id                      
          }
        }
      }
    }
  }
`
