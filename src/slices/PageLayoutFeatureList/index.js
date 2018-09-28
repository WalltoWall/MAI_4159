import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  FeatureName,
  Title,
  Content,
  StyledLink,
  ImageContainer,
  OverlayContainer,
} from './index.styled'
import { Button } from 'components/Button'

const renderFeatureGrid = ({ alt, key, img, title, url }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image fluid={img} alt={alt} fadeIn={false} />
    </ImageContainer>
    <OverlayContainer>
      <Title>{title}</Title>
    </OverlayContainer>
  </StyledLink>
)

export const PageLayoutFeatureList = ({ data }) => {
  const featuredType = get(data, 'primary.feature_type')
  const projects = get(data, 'items')

  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <FeatureName>{featuredType}</FeatureName>
      <Content>
        {projects.map(project =>
          renderFeatureGrid({
            key: get(project, 'projects.document[0].uid'),
            alt: getUnlessEmptyString(
              get(project, 'projects.document[0].data.image.alt')
            ),
            img: get(
              project,
              'projects.document[0].data.image.localFile.childImageSharp.fluid'
            ),
            title: get(project, 'projects.document[0].data.title.text'),
            url: get(project, 'projects.url'),
          })
        )}
      </Content>
      <Button to="/all-projects/">view projects</Button>
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutFeatureList on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutFeatureList {
            id
            items {
              projects {
                document {
                  data {
                    title {
                      text
                    }
                    image {
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 500, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                          }
                        }
                      }
                    }
                  }
                  uid
                }
                url
              }
            }
            primary {
              feature_type
              background_color
            }
          }
        }
      }
    }
  }
`
