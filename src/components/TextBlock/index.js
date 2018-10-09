import React from 'react'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Container, Content, StyledHtmlClassName } from './index.styled'

export const TextBlock = ({ data }) => {
  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Content align_text={get(data, 'primary.align_text')}>
        <HTMLContent
          html={get(data, 'primary.content.html')}
          className={StyledHtmlClassName}
        />
      </Content>
    </Container>
  )
}