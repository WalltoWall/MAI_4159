import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text } from './index.styled'

export const PageLayoutCallout = ({ data }) => (
  <Container>
    <Text
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.text.html') }}
    />
  </Container>
)

export const query = graphql`
  fragment PageLayoutCallout on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCallout {
            id
            primary {
              title1 {
                html
              }
            }
            items {
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
