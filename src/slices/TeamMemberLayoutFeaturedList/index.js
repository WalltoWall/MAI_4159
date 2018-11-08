import React from 'react'
import { graphql } from 'gatsby'
import { Container, GridContainer } from './index.styled'
import { get, split } from 'lodash'
import { RenderGrid } from 'components/RenderGrid'
import { SmallHeadline } from 'components/SmallHeadline'
import { getUnlessEmptyString } from 'helpers'

export const TeamMemberLayoutFeaturedList = ({ data, rootData }) => { 
const projects = get(data, 'items')

  return (
    <Container>
    <SmallHeadline>
      {split(get(rootData, "prismicTeamMember.data.title"), " ")[0]}'s Featured Projects
    </SmallHeadline>
      <GridContainer>
       {projects.map(project =>
            RenderGrid({
              key: get(project, 'project.document[0].uid'),
              alt: getUnlessEmptyString(
                get(project, 'project.document[0].data.image.alt')
              ),
              img: get(
               project,
                'project.document[0].data.image.localFile.childImageSharp.fluid'
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
                    image {
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
