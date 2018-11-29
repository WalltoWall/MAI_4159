import React from 'react'
import { 
  get,  
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
      <StyledLink 
        to={'/featured-projects/'}
        isActive={location.pathname === "/featured-projects/"}  
      >
        Featured
      </StyledLink>                   
      <VerticalLine>|</VerticalLine>
      <SubFilterContainer>
        <span>View by Building Use:</span>
        <CurrentFilter
          defaultColor={getFilterName(location.pathname) === "Select"}
        >
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
      <StyledLink to={'/historic-research/'}>
        Historical Research
      </StyledLink>        
    </DesktopContainer>    
     {filters.length > 1 && (
      <SubCategoryContainer>
          <Filter
            onClick={(e) => setFilter("All")}
            isActive={currentFilter === "All"}
          >
            All
          </Filter>          
        {filters.map((filter, index) => (          
          <Filter
            onClick={(e) => setFilter(trim(filter))}
            isActive={currentFilter === trim(filter)}
            key={filter + index}
          >
            {trim(filter)}
          </Filter>          
        ))}      
      </SubCategoryContainer>      
      )}
    </>
  ) 
}