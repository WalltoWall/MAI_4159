import React from 'react'
import { 
  get, 
  isEmpty, 
  trim, 
  split, 
  startCase, 
  dropRight, 
  head
} from 'lodash'
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

export const DesktopBar = ({location, categories, filters, setFilter, currentFilter})  => {  
  console.log("whatsappp? ", filters)
  
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
        Featured
      </StyledLink>                   
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
        Historical Research
      </StyledLink>        
    </DesktopContainer>    
     {!isEmpty(filters) && (
      <SubCategoryContainer>
        {filters.map(filter => (          
          <Filter
            onClick={(e) => 
              setFilter(trim(filter))
            }
          >
            {trim(filter)}
          </Filter>          
        ))}      
      </SubCategoryContainer>      
    )}
    </>
  ) 
}