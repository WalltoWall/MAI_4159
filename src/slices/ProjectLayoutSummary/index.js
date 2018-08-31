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

export const ProjectLayoutSummary = ({ data }) => (
  <Container>
    <LeftColumn>
      <HTMLContent 
        html={get(data, 'primary.introduction.html')} 
        className={StyledHtmlClassName}
      />
    </LeftColumn>
    <RightColumn>
      <h2>Project Details</h2>
      <HTMLContent 
        html={get(data, 'primary.details.html')} 
        className={StyledHtmlClassName}
      />
    </RightColumn>
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutSummary on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSummary {
            id
            primary {
              introduction {
                html                
              }
              details {
                html                
              }
            }        
          }
        }
      }
    }
  }
`

