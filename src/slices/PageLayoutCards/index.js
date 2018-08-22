import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Headline, Image, Description, Card, ImageWrapper, CardContainer, CardTitle, ImageContainer, TimeStamp, Wrapper, SecondaryLink } from './index.styled'
import { Link } from 'components/Link'

export const PageLayoutCards = ({ data }) => (
  <Container>
    <Headline>{get(data, 'primary.title1.text')}</Headline>
    <CardContainer>
      {get(data, 'items', []).map(item => (
          <Card>
            <ImageWrapper>
              <ImageContainer>
                <Link to={get(item, 'link.url')}>
                  <Image src={get(item, 'image.url')} />
                </Link>
              </ImageContainer>
            </ImageWrapper>
            <Wrapper>
              <TimeStamp>{get(item, 'date')}</TimeStamp>
              <CardTitle>{get(item, 'title1.text')}</CardTitle>
              <Description
                dangerouslySetInnerHTML={{ __html: get(item, 'description.html') }}
              />
            <SecondaryLink to={get(item, 'link.url')}>
              read more
            </SecondaryLink>
            </Wrapper>
          </Card>
      ))}
    </CardContainer>
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