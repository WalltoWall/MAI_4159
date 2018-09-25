import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
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
} from './index.styled'

const renderFeatureGrid = ({ alt, key, img, title, url, content, date }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image        
        fluid={img}
        alt={alt} 
        fadeIn={false}         
      />
    </ImageContainer>
    <ContentContainer>
      <PostDate>{date}</PostDate>
      <PostTitle>{title}</PostTitle> 
      <PostContent>{content}</PostContent>
      <ReadMore to={url}>Read more</ReadMore>
    </ContentContainer>
  </StyledLink> 
)

export const PageLayoutNewsSection = ({ data }) => {
  const news_post = get(data, 'items')

  return (
    <Container>
      <Content>
        {news_post.map(news_post =>
          renderFeatureGrid({
            key: get(news_post, 'news_post.document[0].uid'),
            alt: getUnlessEmptyString(get(news_post, 'news_post.document[0].data.image.alt')),
            img: get(news_post, 'news_post.document[0].data.image.localFile.childImageSharp.fluid'),
            date: get(news_post, 'news_post.document[0].data.date'),
            title: get(news_post, 'news_post.document[0].data.article_title.text'),
            url: get(news_post, 'news_post.url'),
            content: get(news_post, 'news_post.document[0].data.article_content1.text'),
          })
        )}
      </Content>
    </Container>
  )
}


export const query = graphql`
  fragment PageLayoutNewsSection on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutNewsSection {
            id
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
