import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { SmallHeadline } from 'components/SmallHeadline'
import { RenderGrid } from 'components/RenderGrid'
import { getUnlessEmpty } from 'helpers'
import { Container, Content } from './index.styled'
import { Button } from 'components/Button'

export const ProjectLayoutFeatureList = ({ data }) => {
  const featuredType = get(data, 'primary.feature_type')
  const projects = get(data, 'items')

  return (
    <Container>
      <SmallHeadline>{featuredType}</SmallHeadline>
      <Content>
        {projects.map(project =>
          RenderGrid({
            url: get(project, 'projects.url'),
            key: get(project, 'projects.document[0].uid'),
            img: get(
              project,
              'projects.document[0].data.project_thumb_image.localFile.childImageSharp.fluid'
            ),
            alt: getUnlessEmpty(
              project,
              'projects.document[0].data.project_thumb_image.alt'
            ),
            title: get(project, 'projects.document[0].data.title.text'),
          })
        )}
      </Content>
      <Button to="/featured-projects/">view projects</Button>
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
                    project_thumb_image {
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
