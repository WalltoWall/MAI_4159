import React from 'react'
import { Container, Title, CtaHeaderClassName, Content } from './index.styled'
import { Button } from 'components/Button'
import { HTMLContent } from 'components/HTMLContent'

export const CtaBar = ({ title, content, buttonText, buttonUrl, background }) => (
  <Container background={background}>
    <Title>{title}</Title>
    <Content>
      <HTMLContent
        html={content}
        className={CtaHeaderClassName}
      />
    </Content>
    
    <Button to={buttonUrl}>{buttonText}</Button>
  </Container>
)