import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import {
  Container,
  LeftColumn,
  RightColumn,
  StyledHtmlClassName,
} from './index.styled'

export const ProjectLayoutSideBySideText = ({ data }) => (
  <Container>
    <LeftColumn>
      <HTMLContent
        html={get(data, 'primary.left_text.html')}
        className={StyledHtmlClassName}
      />
    </LeftColumn>
    <RightColumn>
      <HTMLContent
        html={get(data, 'primary.right_text.html')}
        className={StyledHtmlClassName}
      />
    </RightColumn>
  </Container>
)
export const query = graphql`
  fragment ProjectLayoutSideBySideText on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideText {
            id
            primary {
              left_text {
                html
              }
              right_text {
                html
              }
            }
          }
        }
      }
    }
  }
`
