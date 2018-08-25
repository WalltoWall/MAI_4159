import React from 'react'

import { Container } from './index.styled'

export const HTMLContent = ({ children, html, ...props }) =>
  children ? (
    <Container {...props}>{children}</Container>
  ) : (
    <Container dangerouslySetInnerHTML={{ __html: html }} {...props} />
  )
