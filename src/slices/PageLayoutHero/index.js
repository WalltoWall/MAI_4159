import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Gradient, Container, HeadlineWrapper, Headline, ImageContainer, Image, Description, DescriptionWrapper } from './index.styled'


export const PageLayoutHero = ({ data }) => (
  <div>
    <Container>
      <ImageContainer>
        <Gradient />
        <Image src={get(data, 'primary.image.url')} />
      </ImageContainer>
      <HeadlineWrapper>
        <Headline
          dangerouslySetInnerHTML={{ __html: get(data, 'primary.title1.html') }}
        />
      </HeadlineWrapper>
      <DescriptionWrapper>
        <Description
          dangerouslySetInnerHTML={{ __html: get(data, 'primary.description.html') }}
        />
      </DescriptionWrapper>
    </Container>
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
              description {
                html
              }
            }
          }
        }
      }
    }
  }
`

