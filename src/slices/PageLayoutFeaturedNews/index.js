import React from 'react'
import { graphql } from 'gatsby'
import { get, slice } from 'lodash'
import { format } from 'date-fns'
import { Image } from 'components/Image'
import { Headline } from 'components/Headline'
import arrow from 'assets/yellow-arrow.svg'
import { getUnlessEmpty } from 'helpers'
import {
  Container,
  Content,
  ImageContainer,
  StyledLink,
  PostTitle,
  PostContent,
  ReadMore,
  ContentContainer,
  PostDate,
  ArrowWrapper,
  ReadMoreWrapper,
  SectionContainer,
} from './index.styled'

const truncateStr = str => {
  let arrstr = slice(str.split(' '), 0, 30).join(' ')
  if (str.split(' ').length <= 30) {
    return str
  } else {
    return arrstr + '...'
  }
}

const renderNewsGrid = ({ alt, key, src, img, title, url, content, date }) => {
  const formattedDate = format(new Date(date), 'MMMM D, YYYY')
  const imageURL = src
  const imageFluid = img
  return (
    <StyledLink to={url} key={key}>
      {(imageURL || imageFluid) && (
        <ImageContainer>
          <Image src={imageURL} fluid={imageFluid} alt={alt} />
        </ImageContainer>
      )}
      <ContentContainer>
        <PostDate>{formattedDate}</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostContent>{content}</PostContent>
        <ReadMoreWrapper>
          <ReadMore to={url}>Read more</ReadMore>
          <ArrowWrapper src={arrow} />
        </ReadMoreWrapper>
      </ContentContainer>
    </StyledLink>
  )
}

export const PageLayoutFeaturedNews = ({ data }) => {
  const featured_news_post = get(data, 'items')

  return (
    <SectionContainer>
      <Headline>Featured Stories</Headline>
      <Container>
        <Content>
          {featured_news_post.map(featured_news_post =>
            renderNewsGrid({
              key: get(featured_news_post, 'featured_news_post.document.uid'),
              alt: getUnlessEmpty(
                get(
                  featured_news_post,
                  'featured_news_post.document.data.article_thumb_image.alt'
                )
              ),
              img: get(
                featured_news_post,
                'featured_news_post.document.data.article_thumb_image.fluid'
              ),
              src: get(
                featured_news_post,
                'featured_news_post.document.data.article_thumb_image.url'
              ),
              date: get(
                featured_news_post,
                'featured_news_post.document.data.publish_date'
              ),
              title: get(
                featured_news_post,
                'featured_news_post.document.data.article_title1.text'
              ),
              url: get(featured_news_post, 'featured_news_post.url'),
              content: get(
                featured_news_post,
                'featured_news_post.document.data.article_content.text'
              )
                ? truncateStr(
                    get(
                      featured_news_post,
                      'featured_news_post.document.data.article_content.text'
                    )
                  )
                : '',
            })
          )}
        </Content>
      </Container>
    </SectionContainer>
  )
}

export const query = graphql`
  fragment PageLayoutFeaturedNews on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutFeaturedNews {
            id
            items {
              featured_news_post {
                document {
                  ... on PrismicNewsPost {
                    uid
                    data {
                      publish_date
                      article_title1 {
                        text
                      }
                      article_content {
                        text
                      }
                      article_thumb_image {
                        alt
                        fluid(maxWidth: 1000) {
                          ...GatsbyPrismicImageFluid_noBase64
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
