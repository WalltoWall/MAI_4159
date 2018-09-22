import React from 'react'

import { Link } from 'components/Link'
import { HTMLContent } from 'components/HTMLContent'
import { Container } from './Result.styled'

export const Result = ({
  path,
  title,
  metaTitle,
  metaDescription,
  excerpt,
}) => (
  <Container>
    <HTMLContent>
      <h4>
        <Link to={path}>{metaTitle || title}</Link>
      </h4>
      {(excerpt || metaDescription) && <p>{excerpt || metaDescription}</p>}
    </HTMLContent>
  </Container>
)
