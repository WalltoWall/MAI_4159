import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import { Content, Container, ImageContainer, StyledLink } from './index.styled'

const renderFeatureGrid = ({ alt, key, img, title, url }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image        
        fluid={img}
        alt={alt} 
        fadeIn={false}         
      />
    </ImageContainer>
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
            title: get(project, 'news_post.document[0].data.title.text'),
            url: get(project, 'news_post.url'),
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
                    title {
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
