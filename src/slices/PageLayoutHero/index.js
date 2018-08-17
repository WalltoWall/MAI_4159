import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text, Images, ImageContainer, Image, Copy } from './index.styled'

const renderItem = item => (
  <ImageContainer>
    <Image src={get(item, 'image.url')} />
  </ImageContainer>
)


export const PageLayoutHero = ({ data }) => (
  <div>
    <Container>
      <ImageContainer>
        <Image src={get(data, 'primary.image.url')} />
      </ImageContainer>
    </Container>
      <Text
        dangerouslySetInnerHTML={{ __html: get(data, 'title1.text.html') }}
      />
      <Copy
        dangerouslySetInnerHTML={{ __html: get(data, 'body_copy.text.html') }}
      />
      <Images>
      {get(data, 'items', []).map(renderItem)}
     </Images>
  </div>
)

export const query = graphql`
  fragment PageLayoutHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutHero {
            id
            primary {
              image {
                url
              }
              title1 {
                html
              }
              body_copy {
                html
              }
            }
            items {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`

