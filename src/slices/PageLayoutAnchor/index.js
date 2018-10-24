import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container } from './index.styled'

export const PageLayoutAnchor = ({ data }) => (
  <Container id={get(data, 'primary.id')} />
)

export const fragment = graphql`
  fragment PageLayoutAnchor on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutAnchor {
            id
            primary {
              id
            }
          }
        }
      }
    }
  }
`
