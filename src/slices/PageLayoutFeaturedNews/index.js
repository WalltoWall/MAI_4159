import React from 'react'
import { graphql } from 'gatsby'
import { get, slice } from 'lodash'
import {format} from 'date-fns'
import { Image } from 'components/Image'
import { Headline } from 'components/Headline'
import arrow from 'assets/yellow-arrow.svg'
import { getUnlessEmptyString } from 'helpers'
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

const truncateStr = (str) => { 
  let arrstr = slice(str.split(" "), 0, 30).join(" ")  
  if (str.split(" ").length <= 30) {  
    return str  
  } else {  
    return arrstr + "..."
  } 
}

const renderNewsGrid = ({ alt, key, img, title, url, content, date }) => {
  const formattedDate = format(
    new Date(date),
    'MMMM' +' D' +', '+'YYYY'
  )
  
  return (
    <StyledLink to={url} key={key}>
      <ImageContainer>
        <Image fluid={img} alt={alt} fadeIn={false} />
      </ImageContainer>
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
    <Headline>Featured News</Headline>
      <Container>
        <Content>
          {featured_news_post.map(featured_news_post =>
            renderNewsGrid({
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
              content: truncateStr(get(featured_news_post, 
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
