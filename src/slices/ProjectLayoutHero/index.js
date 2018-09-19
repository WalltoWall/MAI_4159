import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { Carousel } from 'react-responsive-carousel';
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  ImageContainer,
  Content,
  Title,
  Header,
  SubTitle,
  ClipOverlay,
  InfoBlurb,
  InfoLine,
} from './index.styled'

export const ProjectLayoutHero = ({ data }) => (
  <Container>
    {get(data, 'items').map(item => (
      <ImageContainer>
      <Image         
        alt={getUnlessEmptyString(item, 'image.alt')}     
        fluid={get(item, 'image.localFile.childImageSharp.fluid')} 
        fadeIn={false}        
      />
    </ImageContainer>
    ))}
    <Content>
      <Header>
        <Title>{get(data, 'primary.project_title.text')}</Title>
        <SubTitle>{get(data, 'primary.project_subtitle.text')}</SubTitle>
      </Header>
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
      <ClipOverlay />
    </Content>
    <MobileNavOverlay />
  </Container>
)
export const query = graphql`
  fragment ProjectLayoutHero on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutHero {
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
            }
            items {              
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