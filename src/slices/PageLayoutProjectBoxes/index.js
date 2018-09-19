import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'

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

export const PageLayoutProjectBoxes = ({ data }) => (
  <Container>
    <ProjectContainer>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      {get(data, 'items', []).map(item => (
        <Project>
          <Image
            alt={getUnlessEmptyString(item, 'project_image1.alt')}     
            fluid={get(item, 'project_image1.localFile.childImageSharp.fluid')} 
            fadeIn={false}  
          />
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
  fragment PageLayoutProjectBoxes on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutProjectBoxes {
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
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
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
