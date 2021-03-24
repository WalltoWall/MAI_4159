import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { Image } from 'components/Image'
import { getUnlessEmpty } from 'helpers'
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

export const PageLayoutHero = ({ data }) => {
  const imageURL = get(data, 'primary.image.url')
  const imageFluid = get(data, 'primary.image.fluid')

  return (
    <Container>
      {(imageURL || imageFluid) && (
        <ImageContainer>
          <Gradient />
          <Image
            alt={getUnlessEmpty('primary.image.alt', data)}
            src={imageURL}
            fluid={imageFluid}
          />
        </ImageContainer>
      )}
      <HeadlineWrapper>
        <RotatedContainer>
          <Headline>
            <span>We </span>
            <span>re</span>
            <h1>we are mason</h1>
            <SlidingVertical>
              {get(data, 'items').map((item, idx) => (
                <span key={idx}>{item.rotating_text}</span>
              ))}
            </SlidingVertical>
          </Headline>
        </RotatedContainer>
        <SubHeadline> Hawaii&apos;s Future</SubHeadline>
      </HeadlineWrapper>
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
}

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
                fluid(maxWidth: 1000) {
                  ...GatsbyPrismicImageFluid
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
