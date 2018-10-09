import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import {
  Content,
  StyledHtmlClassName
} from './index.styled'

export const NewsPostLayoutArticleContent = ({ data }) => (
  <Content>
    <h1>{get(data, 'items.text_block.html')}</h1>
    <HTMLContent
      html={get(data, 'items.text_block.html')}
      className={StyledHtmlClassName}
    />
  </Content>
)

export const query = graphql`
  fragment NewsPostLayoutArticleContent on Query {
    prismicNewsPost(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicNewsPostLayoutArticleContent {
            id
            items {
              text_block {
                html
              }
            }
          }
        }
      }
    }
  }
`
