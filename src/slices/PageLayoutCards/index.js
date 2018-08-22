import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Headline, Image, Description, Card, CardContainer, CardTitle, ImageContainer } from './index.styled'
import { Link } from 'components/Link'

export const PageLayoutCards = ({ data }) => (
  <Container>
    <Headline>{get(data, 'primary.title1.text')}</Headline>
    <CardContainer>
      {get(data, 'items', []).map(item => (
          <Card>
            <ImageContainer>
              <Link to={get(item, 'link.url')}>
                <Image src={get(item, 'image.url')} />
              </Link>
            </ImageContainer>
            <CardTitle>{get(item, 'title1.text')}</CardTitle>
          </Card>
      ))}
    </CardContainer>
    <Description
      dangerouslySetInnerHTML={{ __html: get(data, 'primary.description.html') }}
    />
  </Container>
)

export const query = graphql`
  fragment PageLayoutCards on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCards {
            id
            primary {
              title1 {
                text
              }
            }
            items {
              image {
                url
              }
              date
              title1 {
                text
              }
              description {
                html
              }
              link {
                url
              }
            }
          }
        }
      }
    }
  }
`