import React from 'react'
import { Container, StyledHTMLContent, Title, Items, Query } from './index.styled'
import { Placeholder } from 'components/Placeholder'

export const SearchResults = ({ children, query, queryType, ...props }) => {  
  let resultLength
  
  if (queryType === "Projects") {
    resultLength = children[0].props.children.length
  } else {
    resultLength = children[1].length
  } 
  
  return (
    <Container>
      <StyledHTMLContent>
        <Title>{queryType}</Title>
        <p>
          {"Showing" + " "}
          {resultLength + " "} 
          {queryType.slice(0, -1) + " "} 
          result
          {children.length !== 1 && 's'} for <Query>{query}</Query>
        </p>
      </StyledHTMLContent>
      <Items>{children}</Items>
      <Placeholder />
    </Container>
  )
}
  
