import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import { HTMLContent } from 'components/HTMLContent'
import {
  Gradient,
  Container,
  HeadlineWrapper,
  Headline,
  ImageContainer,
  DescriptionWrapper,
  Overlay,
  SlidingVertical,
  RotatedContainer,
  SubHeadline,
  StyledHtmlClassName,
} from './index.styled'

export const PageLayoutHero = ({ data }) => (
  <Container>
    <ImageContainer>
      <Gradient />
      <Image
        alt={getUnlessEmptyString(data, 'primary.image.alt')}
        fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')}
        fadeIn={false}
      />
    </ImageContainer>
    <HeadlineWrapper>
      <RotatedContainer>
        <Headline>
          <span>We </span>
          <span>re</span>
          <h1>we are mason</h1>
        </Headline>
        <SlidingVertical>
          {get(data, 'items').map(item => (
            <span>{item.rotating_text}</span>
          ))}
        </SlidingVertical>
      </RotatedContainer>
    </HeadlineWrapper>
    <SubHeadline> Hawaii's Future</SubHeadline>
    <Overlay>
      <DescriptionWrapper>
        <HTMLContent
          html={get(data, 'primary.description.html')}
          className={StyledHtmlClassName}
        />
      </DescriptionWrapper>
    </Overlay>
    <MobileNavOverlay />
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
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              title1 {
                text
              }
              description {
                html
              }
            }
            items {
              rotating_text
            }
          }
        }
      }
    }
  }
`
