import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {format} from 'date-fns'

import { 
  Container, 
  Title,
  PostDate,
} from './index.styled'


export const NewsPostLayoutTitle = ({ data }) => {

    const formattedDate = format(
    new Date(get(data, 'primary.date1')),
    'MMMM' +' D' +', '+'YYYY'
  )

  return (
    <Container>
      <Title>{get(data, 'primary.title1.text')}</Title>
      <PostDate>{formattedDate}</PostDate>
    </Container>
  )
}

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
