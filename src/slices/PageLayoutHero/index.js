import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Text, Images, ImageContainer, Image } from './index.styled'

const renderItem = item => (
  <ImageContainer>
    <Image src={get(item, 'image.url')} />
  </ImageContainer>
)

export const PageLayoutHero = ({ data }) => (
  <Container>
    <ImageContainer>
      <Image src={get(data, 'primary.image.url')} />
    </ImageContainer>
    <Text
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.text.html') }}
      textColor={get(data, 'primary.text_color')}
    />
    <Images>
      {get(data, 'items', []).map(renderItem)}
    </Images>
  </Container>
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
              text {
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
