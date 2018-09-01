import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {
  Container,
  FeatureName,
  Grid,
  GridOverlay,
  Title,
  Content,
  StyledLink,
} from './index.styled'

export const ProjectLayoutFeatureList = ({ data }) => {
  const featuredType = get(data, 'primary.feature_type')
  const projects = get(data, 'items')

  return (
    <Container>
      <FeatureName>{featuredType}</FeatureName>
      <Content>
        {projects.map(project =>
          renderFeatureGrid({
            key: get(project, 'projects.document[0].uid'),
            img: get(project, 'projects.document[0].data.image.url'),
            title: get(project, 'projects.document[0].data.title.text'),
            url: get(project, 'projects.url'),
          })
        )}
      </Content>
    </Container>
  )
}

const renderFeatureGrid = ({ key, img, title, url }) => (
  <>
    <StyledLink to={url} key={key}>
      <Grid url={img}>
        <Title>{title}</Title>
        <GridOverlay />
      </Grid>
    </StyledLink>
  </>
)

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
                      url
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
