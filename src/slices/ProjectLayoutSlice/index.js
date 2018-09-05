import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Basic } from './Basic'
import { ProjectDetails } from './ProjectDetails'

const map = {
  Basic,
  ProjectDetails,
}

export const ProjectLayoutSlice = props => {  
  const Comp = get(map, get(props, 'data.primary.variation'))
  if (!Comp) return null
  return <Comp {...props} />
}

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
              variation
            }
          }
        }
      }
    }
  }
`