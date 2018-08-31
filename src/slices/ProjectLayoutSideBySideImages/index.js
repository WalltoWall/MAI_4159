import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Content, Image } from './index.styled'
export const ProjectLayoutSideBySideImages = ({ data }) => (
  <Container>
    <Content>
      {get(data, 'items').map(
          (item) => (  
            <Image src={item.image.url}/>
          )  
      )}
      <p>{get(data, 'primary.caption.text')}</p>
    </Content>
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutSideBySideImages on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutSideBySideImages {
            id
            items {
              image {
                url
              }
            }
            primary {
              caption {
                text
              }
            }
          }
        }
      }
    }
  }
`