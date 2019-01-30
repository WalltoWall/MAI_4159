import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Container, ImageContainer, Content } from './index.styled'
import { getUnlessEmpty } from 'helpers'

export const ProjectLayoutFullImage = ({ data }) => {
  return (
    <Container>
      <Content normalizeMargin={get(data, 'primary.normalize_margin')}>
        <ImageContainer>
          <Image
            alt={getUnlessEmpty('primary.image.alt', data)}
            fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageContainer>
        <p>{get(data, 'primary.caption.text')}</p>
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
