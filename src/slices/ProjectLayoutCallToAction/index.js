import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Content, CtaHeaderClassName } from './index.styled'
import Button from 'components/Button'
import { HTMLContent } from 'components/HTMLContent'

export const ProjectLayoutCallToAction = ({data}) => (
  <Container>
    <Content>
      <HTMLContent 
        html={get(data, 'primary.text.html')}  
        className={CtaHeaderClassName}     
      />
    </Content>
    <Button to={get(data, 'primary.button_link.url')}>
      {get(data, 'primary.button_text')}
    </Button>
  </Container>
)

export const query = graphql`
  fragment ProjectLayoutCallToAction on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutCallToAction {
            id
            primary {
              text {
                html
              }
              button_text 
              button_link {
                url
              }
            }
          }
        }
      }
    }
  }
`