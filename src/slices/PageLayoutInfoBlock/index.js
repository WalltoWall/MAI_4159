import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { 
  Container,
  Content,
  Title,
  StyledHtmlClassName,
} from './index.styled'

export const PageLayoutInfoBlock = ({ data }) => (
    <Container>
       {get(data, 'items', []).map(item => (
          <Content>
            <Title>{get(item, 'title1.text')}</Title>
            <HTMLContent
              html={get(item, 'info1.html')}
              className={StyledHtmlClassName}
            />
          </Content>
        ))}
    </Container>
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