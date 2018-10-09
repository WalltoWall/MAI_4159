import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import arrow from 'assets/yellow-arrow.svg'
import { getUnlessEmptyString } from 'helpers'
import {
  Content,
  Container,
  ImageContainer,
  StyledLink,
  PostTitle,
  PostContent,
  ReadMore,
  ContentContainer,
  PostDate,
  ArrowWrapper,
  ReadMoreWrapper,
  Headline,
  SectionContainer,
} from './index.styled'

const text_truncate = function(str, length, ending) { 
  if (length == null) { 
    length = 160  
  } 
  if (ending == null) { 
    ending = '...'  
  } 
  if (str.length > length) {  
    return str.substring(0, length - ending.length) + ending  
  } else {  
    return str  
  } 
}

const renderFeatureGrid = ({ alt, key, img, title, url, content, date }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image fluid={img} alt={alt} fadeIn={false} />
    </ImageContainer>
    <ContentContainer>
      <PostDate>{date}</PostDate>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <ReadMoreWrapper>
        <ReadMore to={url}>Read more</ReadMore>
        <ArrowWrapper src={arrow} />
      </ReadMoreWrapper>
    </ContentContainer>
  </StyledLink>
)

export const PageLayoutFeaturedNews = ({ data }) => {
  const featured_news_post = get(data, 'items')

  return (
    <SectionContainer>
    <Headline>Featured News</Headline>
      <Container>
        <Content>
          {featured_news_post.map(featured_news_post =>
            renderFeatureGrid({
              key: get(featured_news_post, 'featured_news_post.document[0].uid'),
              alt: getUnlessEmptyString(
                get(featured_news_post, 'featured_news_post.document[0].data.image.alt')
              ),
              img: get(
                featured_news_post,
                'featured_news_post.document[0].data.image.localFile.childImageSharp.fluid'
              ),
              date: get(featured_news_post, 'featured_news_post.document[0].data.date'),
              title: get(
                featured_news_post,
                'featured_news_post.document[0].data.article_title.text'
              ),
              url: get(featured_news_post, 'featured_news_post.url'),
              content: text_truncate(get(featured_news_post, 
                'featured_news_post.document[0].data.article_content1.text')),
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
                  data {
                    date
                    article_title {
                      text
                    }
                    article_content1 {
                      text
                    }
                    image {
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