import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { HTMLContent } from 'components/HTMLContent'
import { getUnlessEmptyString } from 'helpers'
import { 
  Container,
  Content,
  ImageContainer,
  Title,
  StyledHtmlClassName,
} from './index.styled'

export const PageLayoutInfoBlock = ({ data }) => (
    <Container>
       {get(data, 'items', []).map(item => (
          <Content>
            <ImageContainer>
              <Image
                fluid={get(item, 'icon.localFile.childImageSharp.fluid')} 
                alt={getUnlessEmptyString(data, 'icon.image.alt')}     
                fadeIn={false}    
              />
            </ImageContainer>
            <Title>{get(item, 'title1.text')}</Title>
            <HTMLContent
              html={get(item, 'info1.html')}
              className={StyledHtmlClassName}
            />
          </Content>
        ))}
    </Container>
)

export const query = graphql`
  fragment PageLayoutInfoBlock on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutInfoBlock {
            id
            items {
              icon {                
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }              
              }
              title1 {
                text
              }
              info1 {
                html
              }
            }
          }
        }
      }
    }
  }
`