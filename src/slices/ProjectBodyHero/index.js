import React from 'react'
import { graphql } from 'gatsby'

export const ProjectBodyHero = () => (
  <div>
      hello project
  </div>
)

export const query = graphql`
  fragment ProjectBodyHero on Query {
    prismicProject(id: { eq: $id }) {
      data {
        body {
          ... on PrismicProjectBodyHero {
            id
          }
        }
      }
    }
  }
`



