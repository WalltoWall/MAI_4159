import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  ImageContainer,
  Content,
  Title,
  Header,
  SubTitle,
  ClipOverlay,
  InfoContainer,
  ContentContainer,
} from './index.styled'

export const PageLayoutLargeSubpageHero = ({data}) => (   
      <Container>
        <ContentContainer>
          <Content>
            <Header>
              <SubTitle>Featured news</SubTitle>
              <Title>{get(data, 'primary.article_title.text')}</Title>
            </Header>
            <InfoContainer>
                <p>{get(data, 'primary.article_summary.text')}</p>
            </InfoContainer>
            <ClipOverlay />
          </Content>
        </ContentContainer>
        <ImageContainer>
           <Image 
            alt={getUnlessEmptyString(data, 'primary.image.alt')}     
            fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')} 
            fadeIn={false}        
          />
        </ImageContainer>
        <MobileNavOverlay />
      </Container>
    )

export const query = graphql`
  fragment PageLayoutLargeSubpageHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutLargeSubpageHero {
            id
            primary {
              article_title {
                text
              }
              article_summary {
                text
              }
              image {                
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  }
`