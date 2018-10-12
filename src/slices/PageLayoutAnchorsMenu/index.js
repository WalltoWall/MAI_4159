import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Toggle } from 'react-powerplug'

import { 
  StyledAnchorContainer, 
  StyledAnchor, 
  Desktop, 
  Mobile,
  FilterMenu,
  NavArrow,
  ClipOverlay,
} from './index.styled'

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
    <Mobile>
      <Toggle initial={false}>
        {({toggle, on}) => (
          <>
            <FilterMenu              
              onClick={toggle}
            >            
              Select Service Type
            </FilterMenu>
            <NavArrow active={on} />
            <StyledAnchorContainer
              isOpen={on}
            >                          
              {get(data, 'items').map(item => (        
                <StyledAnchor 
                  key={get(item, 'menu_name')} 
                  href={'#' + get(item, 'anchor_text')}
                >
                  {get(item, 'menu_name')}
                </StyledAnchor>
              ))}
            </StyledAnchorContainer>
          </>
        )}
      </Toggle>
      <ClipOverlay /> 
    </Mobile>
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
