import React from 'react'
import { graphql } from 'gatsby'
import { Container, GridContainer } from './index.styled'
import { get, split } from 'lodash'
import { RenderGrid } from 'components/RenderGrid'
import { SmallHeadline } from 'components/SmallHeadline'
import { getUnlessEmpty } from 'helpers'

export const TeamMemberLayoutFeaturedList = ({ data, rootData }) => {
  const projects = get(data, 'items')

  return (
    <Container>
      <SmallHeadline>
        {split(get(rootData, 'prismicTeamMember.data.title'), ' ')[0]}
        's Featured Projects
      </SmallHeadline>
      <GridContainer>
        {projects.map(project =>
          RenderGrid({
            key: get(project, 'project.document[0].uid'),
            alt: getUnlessEmpty(
              'project.document[0].data.project_thumb_image.alt',
              project
            ),
            img: get(
              project,
              'project.document[0].data.project_thumb_image.localFile.childImageSharp.fluid'
            ),
            title: get(project, 'project.document[0].data.title.text'),
            url: get(project, 'project.url'),
            largeImages: false,
          })
        )}
      </GridContainer>
    </Container>
  )
}
export const query = graphql`
  fragment TeamMemberLayoutFeaturedList on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutFeaturedList {
            id
            items {
              project {
                url
                document {
                  data {
                    title {
                      text
                    }
                    project_thumb_image {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 800, quality: 90) {
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
      }
    }
  }
`
