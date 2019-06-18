import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {
  Container,
  ImageContainer,
  Content,
  DesktopImage,
} from './index.styled'
import { getUnlessEmpty } from 'helpers'

export const NewsPostLayoutFullImage = ({ data }) => {
  const imageFluid = get(data, 'primary.image.localFile.childImageSharp.fluid')
  const imageURL = get(data, 'primary.image.url')

  return (
    <Container>
      <Content>
        {(imageFluid || imageURL) && (
          <ImageContainer>
            <DesktopImage
              alt={getUnlessEmpty('primary.image.alt', data)}
              fluid={imageFluid}
              src={imageURL}
              fadeIn={false}
            />
          </ImageContainer>
        )}
        <p>{get(data, 'primary.caption.text')}</p>
      </Content>
    </Container>
  )
}
export const query = graphql`
  fragment NewsPostLayoutFullImage on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutFullImage {
            id
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
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
