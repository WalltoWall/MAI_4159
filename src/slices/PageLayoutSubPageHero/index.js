import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {MobileNavOverlay} from 'components/Header/Mobile.styled'
import { 
  ClipOverlay, 
  ImageContainer, 
  Image, 
} from './index.styled'

export const PageLayoutSubPageHero = ({ data }) => (
  
    <ImageContainer>
      <Image src={get(data, 'primary.image.url')} />
      <ClipOverlay />
      <MobileNavOverlay />
    </ImageContainer>
)
 export const query = graphql`
  fragment PageLayoutSubPageHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSubPageHero {
            id
            primary {
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