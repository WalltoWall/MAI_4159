import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text, Headline } from './index.styled'

export const PageLayoutCallout = ({ data , item }) => (
  <Container>
    <Headline
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.title1.html') }}
    />
    <Text
      dangerouslySetInnerHTML={{ __html: get(item, 'items.text.html') }}
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
