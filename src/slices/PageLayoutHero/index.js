import React from 'react'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { get } from 'lodash'

import { Container, Text } from './index.styled'

export const PageLayoutHero = ({ data }) => (
 <Container>
    {get(data, 'primary.image') && (
      <ImageContainer>
        <Image
          fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')}
          fadeIn={false}
        />
      </ImageContainer>
    )}
    {get(data, 'primary.body') && (
      <Body
        dangerouslySetInnerHTML={{ __html: get(data, 'primary.body.html') }}
      />
    )}
  </Container>
)

export const query = graphql`
  fragment PageLayoutHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutHero {
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              body {
                html
              }
            }
          }
        }
      }
    }
  }
`