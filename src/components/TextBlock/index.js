import React from 'react'
import { get } from 'lodash'
import {
  Container,
  Content,
  StyledHtmlClassName,
  StyledHTMLContent,  
} from './index.styled'

export const TextBlock = ({ data }) => {
  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Content>        
        <StyledHTMLContent
          html={get(data, 'primary.content.html')}
          className={StyledHtmlClassName}
          align_text={get(data, 'primary.align_text')}
        />
      </Content>
    </Container>
  )
}
