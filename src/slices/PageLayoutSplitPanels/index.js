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
        <ImageBase key={key} fluid={imageFluid} src={imageURL} alt={alt} />
      )
    )
  }

  return (
    <Container>
      {get(data, 'items', []).map((item, idx) => (
        <SplitPanelWrapper key={idx}>
          <ImageContainer>
            <Image
              key={get(item, 'title1')}
              img={get(item, 'image.fluid')}
              src={get(item, 'image.url')}
              alt={getUnlessEmpty('image.alt', item)}
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
                fluid(maxWidth: 1000) {
                  ...GatsbyPrismicImageFluid_noBase64
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
