import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmpty } from 'helpers'
import { Container, Content, ImageContainer } from './index.styled'

export const PageLayoutSocialMedia = ({ data }) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <Content>
        <ImageContainer href={get(item, 'link.url')} target="_blank">
          <Image
            fluid={get(item, 'icon.localFile.childImageSharp.fluid')}
            alt={getUnlessEmpty('icon.image.alt', data)}
            fadeIn={false}
          />
        </ImageContainer>
      </Content>
    ))}
  </Container>
)

export const query = graphql`
  fragment PageLayoutSocialMedia on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSocialMedia {
            id
            items {
              icon {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              link {
                url
              }
            }
          }
        }
      }
    }
  }
`
