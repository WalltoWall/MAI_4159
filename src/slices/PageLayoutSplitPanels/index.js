import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
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

export const PageLayoutSplitPanels = ({ data }) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <SplitPanelWrapper>
        <ImageContainer>
          <Image
            key={get(item, 'title1')}
            fluid={get(item, 'image.localFile.childImageSharp.fluid')}
            alt={getUnlessEmptyString(get(item, 'image.alt'))}
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
