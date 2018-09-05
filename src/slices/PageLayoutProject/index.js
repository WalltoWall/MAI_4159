import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import {
  Container,
  Headline,
  Description,
  Project,
  ProjectContainer,
  ProjectTitle,
  Overlay,
} from './index.styled'
import Button from 'components/Button'
import { Link } from 'components/Link'

export const PageLayoutProject = ({ data }) => (
  <Container>
    <ProjectContainer>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      {get(data, 'items', []).map(item => (
        <Project background={get(item, 'project_image1.url')}>
          <Link to={get(item, 'project_link.url')}>
            <ProjectTitle>{get(item, 'project_title1.text')}</ProjectTitle>
            <Overlay />
          </Link>
        </Project>
      ))}
    </ProjectContainer>
    <Description
      dangerouslySetInnerHTML={{
        __html: get(data, 'primary.description.html'),
      }}
    />
    <Button to="/portfolio/">see our work</Button>
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
