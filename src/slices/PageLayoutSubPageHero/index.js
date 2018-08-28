import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Gradient, Container, ImageContainer, Image } from './index.styled'
export const PageLayoutSubPageHero = ({ data }) => (
  <Container>
    <ImageContainer>
      <Gradient />
      <Image src={get(data, 'primary.image.url')} />
    </ImageContainer>
  </Container>
)
 export const query = graphql`
  fragment PageLayoutSubPageHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSubPageHero {
            id
            primary {
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