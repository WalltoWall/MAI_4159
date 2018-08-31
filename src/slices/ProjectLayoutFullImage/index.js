import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, Image, Content } from './index.styled'
export const ProjectLayoutFullImage = ({ data }) => (
  <Container>
    <Content>
      <Image src={get(data, 'primary.image.url')}/>
      <p>{get(data, 'primary.caption.text')}</p>
    </Content>
  </Container>
)
 export const query = graphql`
  fragment ProjectLayoutFullImage on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutFullImage {
            id
            primary {
              image {
                url
              }
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