import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import {
  Gradient,
  Container,
  HeadlineWrapper,
  Headline,
  ImageContainer,
  Image,
  Description,
  DescriptionWrapper,
  Overlay,
  SlidingVertical,
  RotatedContainer,
  SubHeadline,
} from './index.styled'
import { Title } from '../PageLayoutServices/index.styled';

export class PageLayoutHero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = get(this.props, 'data')
    return (
      <div>
        <Container>
          <ImageContainer>
            <Gradient />
            <Image src={get(data, 'primary.image.url')} />
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
      </div>
    )
  }
}

export const query = graphql`
  fragment PageLayoutHero on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutHero {
            id
            primary {
              image {
                url
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
