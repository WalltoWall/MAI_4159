import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { StyledAnchor, Desktop } from './index.styled'

export const PageLayoutAnchorsMenu = ({ data }) => (
  <>
    <Desktop>
      {get(data, 'items').map(item => (
        <StyledAnchor 
          key={get(item, 'menu_name')} 
          href={'#' + get(item, 'anchor_text')}
        >
          {get(item, 'menu_name')}
        </StyledAnchor>
      ))}
    </Desktop>
  </>
)


export const query = graphql`
  fragment PageLayoutAnchorsMenu on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutAnchorsMenu {
            id
            items {
              menu_name
              anchor_text
            }
          }
        }
      }
    }
  }
`
