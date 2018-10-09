import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Content, ImageContainer } from './index.styled'
import { getUnlessEmptyString } from 'helpers'
import { Image } from 'components/Image'

export const NewsPostLayoutSideBySideImages = ({ data }) => (
  <Container>
    <Content>
      {get(data, 'items').map(item => (
        <ImageContainer>
          <Image
            key={getUnlessEmptyString(data, 'primary.image1.alt')}
            alt={getUnlessEmptyString(data, 'primary.image1.alt')}
            fluid={get(item, 'image1.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageContainer>
      ))}
      <p>{get(data, 'primary.caption.text')}</p>
    </Content>
  </Container>
)
export const query = graphql`
  fragment NewsPostLayoutSideBySideImages on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutSideBySideImages {
            id
            items {
              image1 {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            primary {
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
