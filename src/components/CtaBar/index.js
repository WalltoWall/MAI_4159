import React from 'react'
import { Container, CtaHeaderClassName, Content } from './index.styled'
import { Button } from 'components/Button'
import { Headline } from 'components/Headline'
import { HTMLContent } from 'components/HTMLContent'

export const CtaBar = ({ title, content, buttonText, buttonUrl, background }) => (
  <Container background={background}>
    <Headline white>{title}</Headline>
    <Content>
      <HTMLContent
        html={content}
        className={CtaHeaderClassName}
      />
    </Content>
    
    <Button to={buttonUrl}>{buttonText}</Button>
  </Container>
) 