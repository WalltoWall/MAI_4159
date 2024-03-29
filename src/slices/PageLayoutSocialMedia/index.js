import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image as ImageBase } from 'components/Image'
import { getUnlessEmpty } from 'helpers'
import { Container, Content, ImageContainer } from './index.styled'

const Image = ({ alt, src, img }) => {
  const imageFluid = img
  const imageURL = src

  return (
    (imageFluid || imageURL) && (
      <ImageBase alt={alt} src={imageURL} fluid={imageFluid} />
    )
  )
}
export const PageLayoutSocialMedia = ({ data }) => {
  return (
    <Container>
      {get(data, 'items', []).map((item, idx) => (
        <Content key={idx}>
          <ImageContainer href={get(item, 'link.url')} target="_blank">
            <Image
              img={get(item, 'icon.fluid')}
              src={get(item, 'icon.url')}
              alt={getUnlessEmpty('icon.image.alt', data)}
            />
          </ImageContainer>
        </Content>
      ))}
    </Container>
  )
}

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
                fluid(maxWidth: 650) {
                  ...GatsbyPrismicImageFluid_noBase64
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
