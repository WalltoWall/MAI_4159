import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Headline } from 'components/Headline'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  Content,
  FeatureName,
  Title,
  StyledLink,
  ImageContainer,
  OverlayContainer,
} from './index.styled'
import { Button } from 'components/Button'

const renderFeatureGrid = ({ url, key, img, alt, title }) => (
  <StyledLink to={url} key={key}>
    <ImageContainer>
      <Image alt={alt} fluid={img} fadeIn={false} />
    </ImageContainer>
    <OverlayContainer>
      <Title>{title}</Title>
    </OverlayContainer>
  </StyledLink>
)

export const ProjectLayoutFeatureList = ({ data }) => {
  const featuredType = get(data, 'primary.feature_type')
  const projects = get(data, 'items')

  return (
    <Container>
      <Headline>{featuredType}</Headline>
      <Content>
        {projects.map(project =>
          renderFeatureGrid({
            url: get(project, 'projects.url'),
            key: get(project, 'projects.document[0].uid'),
            img: get(
              project,
              'projects.document[0].data.image.localFile.childImageSharp.fluid'
            ),
            alt: getUnlessEmptyString(
              get(project, 'projects.document[0].data.image.alt')
            ),
            title: get(project, 'projects.document[0].data.title.text'),
          })
        )}
      </Content>
      <Button to="/all-projects/">view projects</Button>
    </Container>
  )
}

export const query = graphql`
  fragment ProjectLayoutFeatureList on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutFeatureList {
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
            }
          }
        }
      }
    }
  }
`
