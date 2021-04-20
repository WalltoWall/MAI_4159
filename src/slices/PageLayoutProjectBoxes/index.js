import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { getUnlessEmpty } from 'helpers'
import { Container, Projects } from './index.styled'
import { Button } from 'components/Button'
import { Headline } from 'components/Headline'
import { RenderGrid } from 'components/RenderGrid'

export const PageLayoutProjectBoxes = ({ data }) => {
  const projects = get(data, 'items')

  return (
    <Container>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      <Projects>
        {projects.map(project =>
          RenderGrid({
            key: get(project, 'projects.document.uid'),
            alt: getUnlessEmpty(
              'projects.document.data.project_thumb_image.alt',
              project
            ),
            img: get(
              project,
              'projects.document.data.project_thumb_image.fluid'
            ),
            src: get(project, 'projects.document.data.project_thumb_image.url'),
            title: get(project, 'projects.document.data.title.text'),
            url: get(project, 'projects.url'),
            largeImages: true,
          })
        )}
      </Projects>
      {get(data, 'primary.button_text') && (
        <Button to={get(data, 'primary.button_link.url')}>
          {get(data, 'primary.button_text')}
        </Button>
      )}
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutProjectBoxes on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutProjectBoxes {
            id
            items {
              projects {
                document {
                  ... on PrismicProject {
                    uid
                    data {
                      title {
                        text
                      }
                      project_thumb_image {
                        alt
                        fluid(maxWidth: 650) {
                          ...GatsbyPrismicImageFluid_noBase64
                        }
                      }
                    }
                  }
                }
                url
              }
            }
            primary {
              title1 {
                text
              }
              button_text
              button_link {
                url
              }
            }
          }
        }
      }
    }
  }
`
