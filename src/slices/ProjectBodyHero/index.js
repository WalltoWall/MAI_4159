import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Gradient, Container, ImageContainer, Image } from './index.styled'
export const ProjectBodyHero = ({ data }) => (
  <Container>
    <ImageContainer>
      <Gradient />
      <Image src={get(data, 'primary.image.url')} />
    </ImageContainer>
  </Container>
)
 export const query = graphql`
  fragment ProjectBodyHero on Query {
    prismicProject(id: { eq: $id }) {
      data {
        body {
          ... on PrismicProjectBodyHero {
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