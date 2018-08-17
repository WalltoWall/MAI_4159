import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text } from './index.styled'

export const PageLayoutText = ({ data }) => (
  <Container>
    <Text
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.text.html') }}
      textColor={get(data, 'primary.text_color')}
    />

  </Container>
)

export const query = graphql`
  fragment PageLayoutText on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutText {
            id
            primary {
              text {
                html
              }
              text_color
            }
          }
        }
      }
    }
  }
`

