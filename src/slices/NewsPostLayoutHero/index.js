import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { getUnlessEmptyString } from 'helpers'
import { Image } from 'components/Image'
import { Container, ImageContainer } from './index.styled'

export const NewsPostLayoutHero = ({ data }) => (
  <Container>
    <ImageContainer>
      <Image
        alt={getUnlessEmptyString(data, 'primary.image.alt')}
        fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')}
        fadeIn={false}
      />
    </ImageContainer>
  </Container>
)

export const query = graphql`
  fragment NewsPostLayoutHero on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutHero {
            id
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
