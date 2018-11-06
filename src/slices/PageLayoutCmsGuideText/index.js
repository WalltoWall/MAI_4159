import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { 
  Container,
  Texts,
  Text,
} from './index.styled'

export const PageLayoutCmsGuideText = ({ data }) => (
  <Container>        
    <Texts>
      <Text        
        html={get(data, 'primary.text.html')}
        centerOnDesktop={true}
      />
    </Texts>
  </Container>
)

export const query = graphql`
  fragment PageLayoutCmsGuideText on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCmsGuideText {
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