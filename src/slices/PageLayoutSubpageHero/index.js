import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Gradient, Container, ImageContainer, Image } from './index.styled'

export const PageLayoutSubpageHero = ({ data }) => (
    <Container>
      <ImageContainer>
        <Gradient />
        <Image src={get(data, 'primary.image.url')} />
      </ImageContainer>
    </Container>
)

export const query = graphql`
  fragment PageLayoutSubpageHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSubpageHero {
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

