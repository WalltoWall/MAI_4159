import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image as ImageBase } from 'components/Image'
import { getUnlessEmpty } from 'helpers'
import {
  Container,
  StyledHeadline,
  Description,
  DescriptionWrapper,
  SplitPanelWrapper,
  ServicesButton,
  ImageContainer,
  Content,
  Overlay,
} from './index.styled'

export const PageLayoutSplitPanels = ({ data }) => {
  const Image = ({ key, alt, src, img }) => {
    const imageURL = src
    const imageFluid = img
    return (
      (imageURL || imageFluid) && (
        <ImageBase
          key={key}
          fluid={imageFluid}
          src={imageURL}
          alt={alt}
          fadeIn={false}
        />
      )
    )
  }

  return (
    <Container>
      {get(data, 'items', []).map(item => (
        <SplitPanelWrapper>
          <ImageContainer>
            <Image
              key={get(item, 'title1')}
              img={get(item, 'image.localFile.childImageSharp.fluid')}
              src={get(item, 'image.url')}
              alt={getUnlessEmpty('image.alt', item)}
              fadeIn={false}
            />
          </ImageContainer>
          <DescriptionWrapper>
            <Content>
              <StyledHeadline>{get(item, 'title1.text')}</StyledHeadline>
              <Description
                dangerouslySetInnerHTML={{
                  __html: get(item, 'description.html'),
                }}
              />
              <ServicesButton to={get(item, 'link.url')}>
                learn more
              </ServicesButton>
              <Overlay />
            </Content>
          </DescriptionWrapper>
        </SplitPanelWrapper>
      ))}
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutSplitPanels on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSplitPanels {
            id
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 90) {
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
              link {
                url
              }
            }
          }
        }
      }
    }
  }
`
