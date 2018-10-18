import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { 
  Container, 
  Title,
  PostDate,
} from './index.styled'

export const NewsPostLayoutTitle = ({ data }) => (
    <Container>
      <Title>{get(data, 'primary.title1.text')}</Title>
      <PostDate>{get(data, 'primary.date1')}</PostDate>
    </Container>
)

export const query = graphql`
  fragment NewsPostLayoutTitle on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutTitle {
            id
            primary {
              title1 {
                text
              }
              date1
            }        
          }
        }
      }
    }
  }
`
