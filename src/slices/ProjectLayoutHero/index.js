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
  CarouselContainer,
  StyledCarousel,
  ContentContainer,
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
              <Title>
                {get(this.props.data, 'primary.project_title.text')}
              </Title>
              <SubTitle>
                {get(this.props.data, 'primary.project_subtitle.text')}
              </SubTitle>
            </Header>
            <InfoContainer>
              <InfoLine />
              <div className={InfoBlurb}>
                <h3>project type</h3>
                <p>{get(this.props.data, 'primary.project_type.text')}</p>
              </div>
              <InfoLine />
              <div className={InfoBlurb}>
                <h3>year completed</h3>
                <p>{get(this.props.data, 'primary.year_completed.text')}</p>
              </div>
            </InfoContainer>
            <ClipOverlay />
          </Content>
        </ContentContainer>
        <CarouselContainer>
          <StyledCarousel autoplay={true} frameOverflow="show">
            {get(this.props.data, 'items').map(item => (
              <ImageContainer key={getUnlessEmptyString(item, 'image.alt')}>
                <Image
                  alt={getUnlessEmptyString(item, 'image.alt')}
                  fluid={get(item, 'image.localFile.childImageSharp.fluid')}
                  fadeIn={false}
                />
              </ImageContainer>
            ))}
          </StyledCarousel>
        </CarouselContainer>
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
