import React from 'react'
import { Container, CtaHeaderClassName } from './index.styled'
import { Button } from 'components/Button'
import { Headline } from 'components/Headline'

export const CtaBar = ({ title, buttonText, buttonUrl, background }) => (
  <Container background={background}>
    <Headline white>{title}</Headline>    
    <Button to={buttonUrl}>{buttonText}</Button>
  </Container>
) 