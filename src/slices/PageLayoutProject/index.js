import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Headline, Image, Description, Project, ProjectContainer, ProjectTitle, ImageContainer, Overlay } from './index.styled'
import Button from 'components/Button'
import { Link } from 'components/Link'

export const PageLayoutProject = ({ data }) => (
  <Container>
    <ProjectContainer>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      {get(data, 'items', []).map(item => (
        <Link to={get(item, 'project_link.url')}>
          <Project>
            <Overlay />
            <ImageContainer>
              <Image src={get(item, 'project_image1.url')} />
            </ImageContainer>
            <ProjectTitle>{get(item, 'project_title1.text')}</ProjectTitle>
          </Project>
        </Link>
      ))}
    </ProjectContainer>
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
                text
              }
              description {
                html
              }
            }
            items {
              project_title1 {
                text
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