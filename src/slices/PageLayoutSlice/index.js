import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { 
  Container,
  Content,
  StyledHtmlClassName,
} from './index.styled'

export const PageLayoutSlice = ({ data }) => {  
  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Content>
        <HTMLContent
          html={get(data, 'primary.content.html')}
          className={StyledHtmlClassName}
        />
      </Content>
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutSlice on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSlice {
            id
            primary {
              content {
                html
              }
              background_color
            }
          }
        }
      }
    }
  }
`