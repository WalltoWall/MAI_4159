import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
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

  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      <Description>{get(data, 'primary.text.text')}</Description>
      <ImageContainer>
        <ImageWrapper>
          <Image
            alt={getUnlessEmptyString(data, 'primary.left_image.alt')}
            fluid={get(
              data,
              'primary.left_image.localFile.childImageSharp.fluid'
            )}
            fadeIn={false}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            alt={getUnlessEmptyString(data, 'primary.right_image.alt')}
            fluid={get(
              data,
              'primary.right_image.localFile.childImageSharp.fluid'
            )}
            fadeIn={false}
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
            key: get(project, 'projects.document[0].uid'),
            alt: getUnlessEmptyString(
              get(project, 'projects.document[0].data.project_thumb_image.alt')
            ),
            img: get(
              project,
              'projects.document[0].data.project_thumb_image.localFile.childImageSharp.fluid'
            ),
            title: get(project, 'projects.document[0].data.title.text'),
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
            items {
              projects {
                document {
                  data {
                    title {
                      text
                    }
                    project_thumb_image {
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 500, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                          }
                        }
                      }
                    }
                  }
                  uid
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
