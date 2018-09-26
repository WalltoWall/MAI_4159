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

const text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 160;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

console.log(text_truncate('We are doing JS string exercises'));

export const PageLayoutLargeSubpageHero = ({data}) => (   
      <Container>
        <ContentContainer>
          <Content>
            <Header>
              <SubTitle>Featured news</SubTitle>
              <Title>{get(data, 'primary.article_title.text')}</Title>
            </Header>
            <InfoContainer>
                <p>{text_truncate(get(data, 'primary.article_summary.text'))}</p>
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