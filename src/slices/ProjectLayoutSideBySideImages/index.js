import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Content, ImageContainer } from './index.styled'
import { getUnlessEmptyString } from 'helpers'
import { Image } from 'components/Image'

export const ProjectLayoutSideBySideImages = ({ data }) => (
  <Container>
    <Content>
      {get(data, 'items').map(item => (
        <ImageContainer>
          <Image
            key={getUnlessEmptyString(data, 'primary.image.alt')}
            alt={getUnlessEmptyString(data, 'primary.image.alt')}
            fluid={get(item, 'image.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageContainer>
      ))}
      <p>{get(data, 'primary.caption.text')}</p>
    </Content>
  </Container>
)
export const query = graphql`
  fragment ProjectLayoutSideBySideImages on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideImages {
            id
            items {
              image {
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
