import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Container, Content, StyledHtmlClassName } from './index.styled'

export const PageLayoutTextBlock = ({ data }) => {
  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Content align_text={get(data, 'primary.align_text')}>
        <HTMLContent
          html={get(data, 'primary.content.html')}
          className={StyledHtmlClassName}
        />
      </Content>
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutTextBlock on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutTextBlock {
            id
            primary {
              content {
                html
              }
              background_color
              align_text
            }
          }
        }
      }
    }
  }
`
