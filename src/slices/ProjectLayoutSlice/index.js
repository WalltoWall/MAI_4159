import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Container, Content, StyledHtmlClassName } from './index.styled'

export const ProjectLayoutSlice = ({ data }) => (
  <Container>
    <Content>
      <HTMLContent
        html={get(data, 'primary.text.html')}
        className={StyledHtmlClassName}
      />
    </Content>
  </Container>
)
export const query = graphql`
  fragment ProjectLayoutSlice on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSlice {
            id
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`
