import React from 'react'
import { graphql } from 'gatsby'
import { get, isEmpty } from 'lodash'
import { CtaBar } from 'components/CtaBar'

export const PageLayoutCtaBar = ({ data }) => (
  <CtaBar
    title={get(data, 'primary.title1.text')}
    buttonText={
      isEmpty(get(data, 'primary.button_text'))
        ? 'Contact Us'
        : get(data, 'primary.button_text')
    }
    buttonUrl={get(data, 'primary.button.url')}
    background={'dark'}
  />
)

export const query = graphql`
  fragment PageLayoutCtaBar on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCtaBar {
            id
            primary {
              title1 {
                text
              }
              button_text
              button {
                url
              }
            }
          }
        }
      }
    }
  }
`
