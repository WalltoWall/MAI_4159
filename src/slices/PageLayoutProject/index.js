import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text, Headline, Image, Images } from './index.styled'
import Button from 'components/Button.js'

const renderItem = item => (
    <Image src={get(item, 'project_image1.url')} />
)

export const PageLayoutProject = ({ data , item }) => (
  <Container>
    <Images>
      {get(data, 'items', []).map(renderItem)}
    </Images>
    <Headline
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.title1.html') }}
    />
    <Text
      dangerouslySetInnerHTML={{ __html: get(data, 'items.project_title1.html') }}
    />
    <Button to="/">see our work</Button>
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