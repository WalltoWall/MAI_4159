import React from 'react'
import { graphql } from 'gatsby'

import { Container} from './index.styled'

export const PageLayoutText = ({ data }) => (
  <Container>
   <h1>
    {data.primary.text.text}
   </h1>
  </Container>
)

export const fragment = graphql`
  fragment PageLayoutText on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutText {
            id
            primary {
              text {
                html
                text
              }
            }
          }
        }
      }
    }
  }
`
