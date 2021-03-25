import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Container, ImageContainer, Content } from './index.styled'
import { getUnlessEmpty } from 'helpers'

export const PageLayoutFullImage = ({ data }) => {
  const imageURL = get(data, 'primary.image.url')
  const imageFluid = get(data, 'primary.image.fluid')
  const caption = get(data, 'primary.caption.text')

  return (
    <Container>
      <Content>
        {(imageURL || imageFluid) && (
          <ImageContainer>
            <Image
              alt={getUnlessEmpty('primary.image.alt', data)}
              src={imageURL}
              fluid={imageFluid}
            />
          </ImageContainer>
        )}
        {caption && <p>{caption}</p>}
      </Content>
    </Container>
  )
}
export const query = graphql`
  fragment PageLayoutFullImage on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutFullImage {
            id
            primary {
              image {
                alt
                fluid(maxWidth: 1000) {
                  ...GatsbyPrismicImageFluid
                }
              }
              caption {
                text
              }
            }
          }
        }
      }
    }
  }
`
