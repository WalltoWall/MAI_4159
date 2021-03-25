import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Image } from 'components/Image'
import { getUnlessEmpty } from 'helpers'
import { Content } from 'components/Content'
import { Headline } from 'components/Headline'
import {
  Container,
  Description,
  ImageWrapper,
  ImageDescription,
  ImageContainer,
  StyledHtmlClassName,
  TextBlock,
  Projects,
  SectionTitle,
} from './index.styled'
import { Button } from 'components/Button'
import { RenderGrid } from 'components/RenderGrid'

export const PageLayoutServices = ({ data }) => {
  const projects = get(data, 'items')
  const serviceName = get(data, 'primary.title1.text')
  const imageURLRight = get(data, 'primary.right_image.url')
  const imageFluidRight = get(data, 'primary.right_image.fluid')
  const imageURLLeft = get(data, 'primary.left_image.url')
  const imageFluidLeft = get(data, 'primary.left_image.fluid')

  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      <Description>{get(data, 'primary.text.text')}</Description>
      <ImageContainer>
        <ImageWrapper>
          <Image
            alt={getUnlessEmpty('primary.left_image.alt', data)}
            fluid={imageFluidLeft}
            src={imageURLLeft}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            alt={getUnlessEmpty('primary.right_image.alt', data)}
            fluid={imageFluidRight}
            src={imageURLRight}
          />
        </ImageWrapper>
      </ImageContainer>
      <ImageDescription>
        {get(data, 'primary.description.text')}
      </ImageDescription>
      <Content>
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
      </Content>
      <SectionTitle>{serviceName} Work</SectionTitle>
      <Projects>
        {projects.map(project =>
          RenderGrid({
            key: get(project, 'projects.document.uid'),
            alt: getUnlessEmpty(
              'projects.document.data.project_thumb_image.alt',
              project
            ),
            img: get(
              project,
              'projects.document.data.project_thumb_image.fluid'
            ),
            src: get(project, 'projects.document.data.project_thumb_image.url'),
            title: get(project, 'projects.document.data.title.text'),
            url: get(project, 'projects.url'),
            largeImages: false,
          })
        )}
      </Projects>
      <Button to="/featured-projects/">view more work</Button>
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
                fluid(maxWidth: 700) {
                  ...GatsbyPrismicImageFluid
                }
              }
              right_image {
                alt
                fluid(maxWidth: 700) {
                  ...GatsbyPrismicImageFluid
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
            items {
              projects {
                document {
                  ... on PrismicProject {
                    uid
                    data {
                      title {
                        text
                      }
                      project_thumb_image {
                        alt
                        fluid(maxWidth: 500) {
                          ...GatsbyPrismicImageFluid
                        }
                      }
                    }
                  }
                }
                url
              }
            }
          }
        }
      }
    }
  }
`
