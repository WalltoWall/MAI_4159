import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { format } from 'date-fns'
import { Headline } from 'components/Headline'

import { Container, PostDate } from './index.styled'

export const NewsPostLayoutTitle = ({ data, rootData }) => {
  const formattedDate = format(
    new Date(get(rootData, 'prismicNewsPost.data.publish_date')),
    'MMMM' + ' D' + ', ' + 'YYYY'
  )

  return (
    <Container>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
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
            }
          }
        }
      }
    }
  }
`
