import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { ClipOverlay, ImageContainer, Image, Title } from './index.styled'

export const PageLayoutSubPageHero = ({ data }) => {
  const titleText = get(data, 'primary.title1.text')
  const imageUrl = get(data, 'primary.image.url')
  return (
    <ImageContainer>
      <Image src={imageUrl} />
      <ClipOverlay />
      {titleText && <Title>{titleText}</Title>}
      <MobileNavOverlay />
    </ImageContainer>
  )
}

export const query = graphql`
  fragment PageLayoutSubPageHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSubPageHero {
            id
            primary {
              title1 {
                text
              }
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`
