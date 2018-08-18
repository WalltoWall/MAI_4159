import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, HeadlineWrapper, Headline, Images, ImageContainer, Image } from './index.styled'

const renderItem = item => (
  <Container>
    <Image src={get(item, 'image.url')} />
  </Container>
)


export const PageLayoutHero = ({ data }) => (
  <div>
    <Container>
      <ImageContainer>
        <Image src={get(data, 'primary.image.url')} />
      </ImageContainer>
      <HeadlineWrapper>
        <Headline
          dangerouslySetInnerHTML={{ __html: get(data, 'primary.title1.html') }}
        />
      </HeadlineWrapper>
    </Container>
      <Images>
      {get(data, 'items', []).map(renderItem)}
     </Images>
  </div>
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
                url
              }
              title1 {
                html
              }
            }
            items {
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

