import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import HoverArrowSVG from 'assets/hov_arrow.svg'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { getUnlessEmpty } from 'helpers'
import {
  Container,
  ImageContainer,
  Content,
  Title,
  Header,
  ClipOverlay,
  InfoContainer,
  InfoBlurb,
  InfoLine,
  CarouselContainer,
  StyledCarousel,
  ContentContainer,
  ArrowControlContainer,
  ArrowControl,
} from './index.styled'

export class ProjectLayoutHero extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Content>
            <Header>
              <Title
                longText={
                  get(this.props.data, 'primary.project_title.text').length >=
                  40
                }
              >
                {get(this.props.data, 'primary.project_title.text')}
              </Title>
            </Header>
            <InfoContainer>
              {get(this.props.data, 'primary.project_type.text') && (
                <>
                  <InfoLine />
                  <div className={InfoBlurb}>
                    <h3>project type</h3>
                    <p>{get(this.props.data, 'primary.project_type.text')}</p>
                  </div>
                </>
              )}
              {get(this.props.data, 'primary.year_completed.text') && (
                <>
                  <InfoLine />
                  <div className={InfoBlurb}>
                    <h3>year completed</h3>
                    <p>{get(this.props.data, 'primary.year_completed.text')}</p>
                  </div>
                </>
              )}
            </InfoContainer>
            <ClipOverlay />
          </Content>
        </ContentContainer>
        {get(this.props.data, 'items').length > 1 && (
          <CarouselContainer>
            <StyledCarousel
              autoplay={true}
              autoplayInterval={5000}
              frameOverflow="hide"
              wrapAround={true}
              renderCenterLeftControls={({ previousSlide }) => (
                <ArrowControlContainer onClick={previousSlide}>
                  <ArrowControl rotate={true} src={HoverArrowSVG} />
                </ArrowControlContainer>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <ArrowControlContainer onClick={nextSlide}>
                  <ArrowControl src={HoverArrowSVG} />
                </ArrowControlContainer>
              )}
            >
              {get(this.props.data, 'items').map(item => (
                <ImageContainer key={getUnlessEmpty('image.alt', item)}>
                  <Image
                    alt={getUnlessEmpty('image.alt', item)}
                    fluid={get(item, 'image.localFile.childImageSharp.fluid')}
                    fadeIn={false}
                  />
                </ImageContainer>
              ))}
            </StyledCarousel>
          </CarouselContainer>
        )}
        {get(this.props.data, 'items').length === 1 && (
          <CarouselContainer>
            <ImageContainer>
              <Image
                alt={getUnlessEmpty('alt', this.props.data.items[0])}
                fluid={get(
                  this.props,
                  'data.items[0].image.localFile.childImageSharp.fluid'
                )}
                fadeIn={false}
              />
            </ImageContainer>
          </CarouselContainer>
        )}
        <MobileNavOverlay />
      </Container>
    )
  }
}
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
