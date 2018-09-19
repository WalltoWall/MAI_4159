import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import {
  Gradient,
  Container,
  HeadlineWrapper,
  Headline,
  ImageContainer,
  Description,
  DescriptionWrapper,
  Overlay,
  SlidingVertical,
  RotatedContainer,
  SubHeadline,
} from './index.styled'

export const PageLayoutHero = ({data}) => (    
  <>
    <Container>
      <ImageContainer>
        <Gradient />
        <Image 
          alt={getUnlessEmptyString(data, 'primary.image.alt')}     
          fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')} 
          fadeIn={false}        
        />
      </ImageContainer>
      <HeadlineWrapper>
        <RotatedContainer>
          <Headline>
            <span>We </span>
            <span>re</span>
            <h1>we are mason</h1>
          </Headline>                        
          <SlidingVertical>
            <span>Imagine</span>
            <span>Make</span>
            <span>Build</span>
            <span>Design</span>
            <span>Think</span>
          </SlidingVertical>          
        </RotatedContainer>
      </HeadlineWrapper>
      <SubHeadline> Hawai'i's Future</SubHeadline>
      <Overlay>
        <DescriptionWrapper>
          <Description
            dangerouslySetInnerHTML={{
              __html: get(data, 'primary.description.html'),
            }}
          />
        </DescriptionWrapper>
      </Overlay>
      <MobileNavOverlay/>              
    </Container>      
  </>
)
  

export const query = graphql`
  fragment PageLayoutHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutHero {
            id
            primary {
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
              title1 {
                text
              }
              description {
                html
              }
            }
          }
        }
      }
    }
  }
`
