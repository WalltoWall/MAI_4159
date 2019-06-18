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
  const imageFluid = get(data, 'primary.image.localFile.childImageSharp.fluid')

  return (
    <Container>
      {(imageURL || imageFluid) && (
        <ImageContainer>
          <Gradient />
          <Image
            alt={getUnlessEmpty('primary.image.alt', data)}
            src={imageURL}
            fluid={imageFluid}
            fadeIn={false}
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
              {get(data, 'items').map(item => (
                <span>{item.rotating_text}</span>
              ))}
            </SlidingVertical>
          </Headline>
        </RotatedContainer>
        <SubHeadline> Hawaii's Future</SubHeadline>
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
