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
} from './index.styled'

const renderFeatureGrid = ({ alt, key, img, title, url, content }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image        
        fluid={img}
        alt={alt} 
        fadeIn={false}         
      />
    </ImageContainer>
    <PostTitle>{title}</PostTitle> 
    <PostContent>{content}</PostContent>
  </StyledLink> 
)

export const PageLayoutNewsSection = ({ data }) => {
  const news_post = get(data, 'items')

  return (
    <Container>
      <Content>
        {news_post.map(project =>
          renderFeatureGrid({
            key: get(project, 'news_post.document[0].uid'),
            alt: getUnlessEmptyString(get(project, 'news_post.document[0].data.image.alt')),
            img: get(project, 'news_post.document[0].data.image.localFile.childImageSharp.fluid'),
            title: get(project, 'news_post.document[0].data.article_title.text'),
            url: get(project, 'news_post.url'),
            content: get(project, 'news_post.document[0].data.article_content1.text'),
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