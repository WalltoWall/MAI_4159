import React from 'react'
import { graphql } from 'gatsby'

export const ProjectBodyCategories = () => (
  <div>
      hello project
  </div>
)

export const query = graphql`
  fragment ProjectBodyCategories on Query {
    prismicProject(id: { eq: $id }) {
      data {
        body {
          ... on PrismicProjectBodyCategories {
            id
          }
        }
      }
    }
  }
`



