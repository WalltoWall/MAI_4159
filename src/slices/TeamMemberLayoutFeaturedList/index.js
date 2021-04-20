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
        &apos;s Featured Projects
      </SmallHeadline>
      <GridContainer>
        {projects.map(project =>
          RenderGrid({
            key: get(project, 'project.document.uid'),
            alt: getUnlessEmpty(
              'project.document.data.project_thumb_image.alt',
              project
            ),
            img: get(
              project,
              'project.document.data.project_thumb_image.fluid'
            ),
            src: get(project, 'project.document.data.project_thumb_image.url'),
            title: get(project, 'project.document.data.title.text'),
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
                  ... on PrismicProject {
                    data {
                      title {
                        text
                      }
                      project_thumb_image {
                        fluid(maxWidth: 750) {
                          ...GatsbyPrismicImageFluid_noBase64
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
