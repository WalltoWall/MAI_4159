import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Headline, Image, Description, Project, ProjectContainer, ProjectTitle } from './index.styled'
import Button from 'components/Button.js'
import { Link } from 'components/Link.js'

export const PageLayoutProject = ({ data }) => (
  <Container>
  <ProjectContainer>
    {get(data, 'items', []).map(item => (
      <Link to={get(item, 'project_link.url')}>
        <Project>
          <Image src={get(item, 'project_image1.url')} />
          <ProjectTitle dangerouslySetInnerHTML={{ __html: get(item, 'project_title1.html')}} />
        </Project>
    </Link>
  ))}
 </ProjectContainer>
      <Headline
        dangerouslySetInnerHTML={{ __html: get(data, 'primary.title1.html') }}
      />
      <Description
        dangerouslySetInnerHTML={{ __html: get(data, 'primary.description.html') }}
      />
      <Button to="/">see our work</Button>
  </Container>
)

export const query = graphql`
  fragment PageLayoutProject on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutProject {
            id
            primary {
              title1 {
                html
              }
              description {
                html
              }
            }
            items {
              project_title1 {
                html
              }
              project_image1 {
                url
              }
              project_link {
                url
              }
            }
          }
        }
      }
    }
  }
`