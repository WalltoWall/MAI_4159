import React from 'react'
import { get, isEmpty, trim, split, startCase, dropRight, head} from 'lodash'
import { Value } from 'react-powerplug'
import {
  DesktopContainer,
  StyledLink,  
  SubFilterContainer,
  CurrentFilter,  
  NavArrow,
  StyledLinkContainer,
  VerticalLine,
  NestedStyledLink,
  SubCategoryContainer,
  Filter,
} from './DesktopBar.styled'

export const DesktopBar = ({location, categories, subTypes})  => {  
  
  const getFilterName = (path) => {     
    let initialLabel = split(startCase(trim(path, "/")), " ")    
    if (initialLabel.length > 1) {        
      if (head(initialLabel) === "Featured" || "Historical") {
        return "Select"
      } else {
        return head(dropRight(initialLabel))
      }      
    } else {
      return head(initialLabel)
    }      
  }

  return (
    <>
    <DesktopContainer>
        <StyledLink to={'/featured-projects/'}>
          Featured</StyledLink>                   
        <VerticalLine>|</VerticalLine>
        <SubFilterContainer>
          <span>Building Use:</span>
          <CurrentFilter>
            {getFilterName(location.pathname)}
          </CurrentFilter>
          <NavArrow/>
          <StyledLinkContainer>
          {categories.map(item => (
            <NestedStyledLink
              key={get(item, 'name')}
              to={get(item, 'link.url', '/')}                
            >
              {get(item, 'name')}
            </NestedStyledLink>
          ))}  
          </StyledLinkContainer>
        </SubFilterContainer>          
        <VerticalLine>|</VerticalLine>
        <StyledLink to={'/featured-projects/'}>
          Historical Research</StyledLink>        
      </DesktopContainer>
      {
      /* 
      
      2ndary filter bar:

      - "show secondary filter select from page"
       - option1: set filters on page content type under unique tab and get it from rootData
       - option2: get it from categoriesbar slice/ use static and regular both together

      - get filter options from page data (main)  
      - display by default on page except featured and historical research 
      - get additional filter on project content type
      - display & hide based on chosen filter
        - use Value (powerplug) and css
      */
     }
     {!isEmpty(subTypes) && (
      <SubCategoryContainer>
        {subTypes.map(type => (          
          <Filter>
            {type.filter_name}
          </Filter>          
        ))}      
      </SubCategoryContainer>      
    )}
    </>
  ) 
}