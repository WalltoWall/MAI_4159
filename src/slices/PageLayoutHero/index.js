import React from 'react'
import { graphql } from 'gatsby'
import { get, forEach, delay } from 'lodash'
import { Transition, animated } from 'react-spring'

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
} from './index.styled'
import { Title } from '../PageLayoutServices/index.styled';


export class PageLayoutHero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      TitleSlide: "think",
    }
  }



  componentDidMount() {
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
            <Headline>We re</Headline><Headline>{this.state.TitleSlide}</Headline>                        
          </HeadlineWrapper>
          <Overlay>
            <DescriptionWrapper>
              <Description
                dangerouslySetInnerHTML={{
                  __html: get(data, 'primary.description.html'),
                }}
              />
            </DescriptionWrapper>
          </Overlay>      
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
