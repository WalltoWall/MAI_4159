import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Title, Content, Image } from './index.styled'
import Button from 'components/Button'

export const PageLayoutServices = ({ data }) => (
  <Container>
    <Title>{get(data, 'primary.title1.text')}</Title>
    <Content>{get(data, 'primary.text.text')}</Content>
    <Image src={get(data, 'primary.image.url')} />
    <Button to="/">just a button</Button>
  </Container>
)

export const query = graphql`
  fragment PageLayoutServices on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutServices {
            id
            primary {
              title1 {
                text
              }
              text {
                text
              }
              image {
                url
              }
              description {
                html
              }
            }
            items {
              related_projects {
                url
              }
            }
          }
        }
      }
    }
  }
`
