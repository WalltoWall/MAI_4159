import React from 'react'
import { HTMLContent } from 'components/HTMLContent'
import { Container, Title, Excerpt, StyledLink } from './PageResult.styled'

export const PageResult = ({
  path,
  title,
  metaTitle,
  metaDescription,
  excerpt,
}) => (
  <Container>
    <HTMLContent>
      <StyledLink to={path}>
        <Title>{metaTitle || title}</Title>
        <Excerpt>
          {(excerpt || metaDescription) && <p>{excerpt || metaDescription}</p>}
        </Excerpt>
      </StyledLink>
    </HTMLContent>
  </Container>
)
