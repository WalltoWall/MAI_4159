import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  Title,
  Content,
  ImageWrapper,
  ImageDescription,
  ImageContainer,
  StyledHtmlClassName,
  TextWrapper,
  TextBlock,
} from './index.styled'

export const PageLayoutServices = ({ data }) => {
  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Title>{get(data, 'primary.title1.text')}</Title>
      <Content>{get(data, 'primary.text.text')}</Content>
      <ImageContainer>
        <ImageWrapper>
          <Image
            alt={getUnlessEmptyString(data, 'primary.left_image.alt')}
            fluid={get(data, 'primary.left_image.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageWrapper>
         <ImageWrapper>
          <Image
            alt={getUnlessEmptyString(data, 'primary.right_image.alt')}
            fluid={get(data, 'primary.right_image.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageWrapper>
      </ImageContainer>
      <ImageDescription>{get(data, 'primary.description.text')}
      </ImageDescription>
      <TextWrapper>
        <TextBlock>
          <HTMLContent
            html={get(data, 'primary.left_text_block.html')}
            className={StyledHtmlClassName}
          />
        </TextBlock>
        <TextBlock>
        <HTMLContent
          html={get(data, 'primary.right_text_block.html')}
          className={StyledHtmlClassName}
        />
        </TextBlock>
      </TextWrapper>
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutServices on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutServices {
            id
            primary {
              background_color
              title1 {
                text
              }
              text {
                text
              }
              left_image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              right_image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              description {
                text
              }
              left_text_block {
                html
              }
              right_text_block {
                html
              }
            }
          }
        }
      }
    }
  }
`
