import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import arrow from 'assets/yellow-arrow.svg'
import { getUnlessEmptyString } from 'helpers'
import { Button } from 'components/Button'
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

const characterLimit = function(str, length, ending) { 
  if (length == null) { 
    length = 85  
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

export const PageLayoutNewsSection = ({ data }) => {
  const news_post = get(data, 'items')

  return (
    <SectionContainer>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      <Container>
        <Content>
          {news_post.map(news_post =>
            renderFeatureGrid({
              key: get(news_post, 'news_post.document[0].uid'),
              alt: getUnlessEmptyString(
                get(news_post, 'news_post.document[0].data.image.alt')
              ),
              img: get(
                news_post,
                'news_post.document[0].data.image.localFile.childImageSharp.fluid'
              ),
              date: get(news_post, 'news_post.document[0].data.date'),
              title: get(
                news_post,
                'news_post.document[0].data.article_title.text'
              ),
              url: get(news_post, 'news_post.url'),
              content: characterLimit(get(news_post, 
                'news_post.document[0].data.article_content1.text')),
            })
          )}
        </Content>
      </Container>
      <Button to={get(data, 'primary.button.url')}>view more news</Button>
    </SectionContainer>
  )
}

export const query = graphql`
  fragment PageLayoutNewsSection on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutNewsSection {
            id
            primary {
              title1 {
                text
              }
              button {
                url
              }
            }
            items {
              news_post {
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
