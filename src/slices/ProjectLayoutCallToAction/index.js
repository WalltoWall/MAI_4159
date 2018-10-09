import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { CtaBar } from 'components/CtaBar'

export const ProjectLayoutCallToAction = ({ data }) => (
  <CtaBar 
    title=""
    content={get(data, 'primary.text.html')}
    buttonUrl={get(data, 'primary.button_link.url')}
    buttonText={get(data, 'primary.button_text')}
    background={"dark"}
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
