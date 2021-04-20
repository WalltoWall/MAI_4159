import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image as ImageBase } from 'components/Image'
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

const Image = ({ alt, src, img }) => {
  const imageURL = src
  const imageFluid = img
  return (
    (imageURL || imageFluid) && (
      <ImageBase alt={alt} src={imageURL} fluid={imageFluid} />
    )
  )
}

export class ProjectLayoutHero extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    const { data } = this.props
    return (
      <Container>
        <ContentContainer>
          <Content>
            <Header>
              <Title
                longText={get(data, 'primary.project_title.text').length >= 40}
              >
                {get(data, 'primary.project_title.text')}
              </Title>
            </Header>
            <InfoContainer>
              {get(data, 'primary.project_type.text') && (
                <>
                  <InfoLine />
                  <div className={InfoBlurb}>
                    <h3>project type</h3>
                    <p>{get(data, 'primary.project_type.text')}</p>
                  </div>
                </>
              )}
              {get(data, 'primary.year_completed.text') && (
                <>
                  <InfoLine />
                  <div className={InfoBlurb}>
                    <h3>year completed</h3>
                    <p>{get(data, 'primary.year_completed.text')}</p>
                  </div>
                </>
              )}
            </InfoContainer>
            <ClipOverlay />
          </Content>
        </ContentContainer>
        {get(data, 'items').length > 1 && (
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
              {get(data, 'items').map(item => (
                <ImageContainer key={getUnlessEmpty('image.alt', item)}>
                  <Image
                    alt={getUnlessEmpty('image.alt', item)}
                    src={get(item, 'image.url')}
                    img={get(item, 'image.fluid')}
                  />
                </ImageContainer>
              ))}
            </StyledCarousel>
          </CarouselContainer>
        )}
        {get(data, 'items').length === 1 && (
          <CarouselContainer>
            <ImageContainer>
              <Image
                alt={getUnlessEmpty('alt', data.items[0])}
                src={get(data, 'items[0].image.url')}
                img={get(data, 'items[0].image.fluid')}
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
                fluid(maxWidth: 1250) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
