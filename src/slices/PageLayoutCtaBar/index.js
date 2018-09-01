import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Title, Content } from './index.styled'
import Button from 'components/Button'

export const PageLayoutCtaBar = ({ data }) => (
  <Container>
    <Title>{get(data, 'primary.title1.text')}</Title>
    <Content>{get(data, 'primary.text.text')}</Content>
    <Button to={get(data, 'primary.button.url')}>contact us</Button>
  </Container>
)

export const query = graphql`
  fragment PageLayoutCtaBar on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCtaBar {
            id
            primary {
              title1 {
                text
              }
              text {
                text
              }
              button {
                url
              }
            }
          }
        }
      }
    }
  }
`
