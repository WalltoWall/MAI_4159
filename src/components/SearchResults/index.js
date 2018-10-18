import React from 'react'

import { Container, StyledHTMLContent, Title, Items } from './index.styled'

export const SearchResults = ({ children, query, queryType, ...props }) => (
  <Container>
    <StyledHTMLContent>
      <Title>{queryType}</Title>
      <p>
        Showing {children.length} {queryType.slice(0, -1)} result
        {children.length !== 1 && 's'} for <strong>{query}</strong>
      </p>
    </StyledHTMLContent>
    <Items>{children}</Items>
  </Container>
)
