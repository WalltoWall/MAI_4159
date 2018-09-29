import React from 'react'

import { Container, IconContainer, Icon } from './index.styled'

export const ExpandButton = ({
  isExpanded = false,
  ...props
}) => (
  <Container {...props}>
    <IconContainer>
      <Icon isExpanded={isExpanded ? 'true' : undefined} />
    </IconContainer>
  </Container>
)