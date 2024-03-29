import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Headline } from 'components/Headline'
import { Content, Info, StyledHtmlClassName } from './index.styled'

export const PageLayoutInfoBlock = ({ data }) => (
  <Content>
    {get(data, 'items', []).map((item, idx) => (
      <Info key={idx}>
        <Headline alignLeft>{get(item, 'title1.text')}</Headline>
        <HTMLContent
          html={get(item, 'info1.html')}
          className={StyledHtmlClassName}
        />
      </Info>
    ))}
  </Content>
)

export const query = graphql`
  fragment PageLayoutInfoBlock on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutInfoBlock {
            id
            items {
              title1 {
                text
              }
              info1 {
                html
              }
            }
          }
        }
      }
    }
  }
`
