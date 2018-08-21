import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text, Headline, Image } from './index.styled'

export const PageLayoutProject = ({ data , item }) => (
  <Container>
    <Headline
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.title1.html') }}
    />
    <Image src={get(data, 'items.project_image1.url')} />
    <Text
      dangerouslySetInnerHTML={{ __html: get(data, 'items.project_title1.html') }}
    />
  </Container>
)

export const query = graphql`
  fragment PageLayoutProject on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutProject {
            id
            primary {
              title1 {
                html
              }
            }
            items {
              project_title1 {
                html
              }
              project_image1 {
                url
              }
            }
          }
        }
      }
    }
  }
`