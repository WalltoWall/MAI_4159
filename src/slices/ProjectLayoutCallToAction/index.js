import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { CtaBar } from 'components/CtaBar'

export const ProjectLayoutCallToAction = ({ data }) => (
  <CtaBar
    title={get(data, 'primary.title1.text')}
    buttonUrl={get(data, 'primary.button_link.url')}
    buttonText={get(data, 'primary.button_text')}
    background={'dark'}
  />
)

export const query = graphql`
  fragment ProjectLayoutCallToAction on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutCallToAction {
            id
            primary {
              title1 {
                text
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
