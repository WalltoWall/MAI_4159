import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {
  Container,
  ImageContainer,
  Content,
  DesktopImage,
  MobileImage,
} from './index.styled'

export const NewsPostLayoutFullImageGif = ({ data }) => (
  <Container>
    <Content>
      <ImageContainer>
        <DesktopImage src={get(data, 'primary.image.url')} />
        <MobileImage src={get(data, 'primary.image_mobile_ver1.url')} />
      </ImageContainer>
    </Content>
  </Container>
)
export const query = graphql`
  fragment NewsPostLayoutFullImageGif on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutFullImageGif {
            id
            primary {
              image_mobile_ver1 {
                url
              }
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
