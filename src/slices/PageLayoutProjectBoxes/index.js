import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  Projects,
} from './index.styled'
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
