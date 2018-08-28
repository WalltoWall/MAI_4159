import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Gradient, Container, ImageContainer, Image } from './index.styled'
export const ProjectLayoutHero = ({ data }) => (
  <Container>
    <ImageContainer>
      <Gradient />
      <Image src={get(data, 'primary.image.url')} />
    </ImageContainer>
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutHero on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutHero {
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