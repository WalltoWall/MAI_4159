import React from 'react'

import { Container, StyledHTMLContent, Items } from './index.styled'

export const SearchResults = ({ children, query, queryType, ...props }) => (
  <Container>
    <StyledHTMLContent>
      <h3>Results for {queryType}</h3>
      <p>        
        Showing {children.length} result
        {children.length !== 1 && 's'} for <strong>{query}</strong>
      </p>
    </StyledHTMLContent>
    <Items>{children}</Items>
  </Container>
)