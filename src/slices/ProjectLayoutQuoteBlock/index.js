import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {
  Container,
  Quote,
  QuoteWrapper,
  Author,
  QuoteMark,
} from './index.styled'

export const ProjectLayoutQuoteBlock = ({ data }) => (
  <Container>
    <QuoteWrapper>
      <QuoteMark />
      <Quote>{get(data, 'primary.quote.text')}</Quote>
      <Author>– {get(data, 'primary.author.text')}</Author>
    </QuoteWrapper>
  </Container>
)

export const query = graphql`
  fragment ProjectLayoutQuoteBlock on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutQuoteBlock {
            id
            primary {
              quote {
                text
              }
              author {
                text
              }
            }
          }
        }
      }
    }
  }
`
