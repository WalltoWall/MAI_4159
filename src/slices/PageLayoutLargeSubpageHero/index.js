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
  InfoBlurb,
  InfoLine,
  ContentContainer,
} from './index.styled'

export const PageLayoutLargeSubpageHero = ({data}) => (   
      <Container>
        <ContentContainer>
          <Content>
            <Header>
              <Title>{get(data, 'primary.project_title.text')}</Title>
              <SubTitle>{get(data, 'primary.project_subtitle.text')}</SubTitle>
            </Header>
            <InfoContainer>
              <InfoLine />
              <div className={InfoBlurb}>
                <h3>project type</h3>
                <p>{get(data, 'primary.project_type.text')}</p>
              </div>
              <InfoLine />
              <div className={InfoBlurb}>
                <h3>year completed</h3>
                <p>{get(data, 'primary.year_completed.text')}</p>
              </div>
              <InfoLine />
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
              project_title {
                text
              }
              project_subtitle {
                text
              }
              year_completed {
                text
              }
              project_type {
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