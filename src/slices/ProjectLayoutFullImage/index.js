import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Container, ImageContainer, Content } from './index.styled'
import { getUnlessEmpty } from 'helpers'

export const ProjectLayoutFullImage = ({ data }) => {
  const imageURL = get(data, 'primary.image.url')
  const imageFluid = get(data, 'primary.image.fluid')
  const caption = get(data, 'primary.caption.text')

  return (
    <Container normalizeMargin={get(data, 'primary.normalize_margin')}>
      <Content normalizeMargin={get(data, 'primary.normalize_margin')}>
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
  fragment ProjectLayoutFullImage on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutFullImage {
            id
            primary {
              normalize_margin
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
