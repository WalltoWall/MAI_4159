import React from 'react'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Container, Content, StyledHtmlClassName } from './Basic.styled'

export const Basic = props => ( 
  <Container>
    <Content>
      <HTMLContent
        html={get(props, 'data.primary.text.html')}
        className={StyledHtmlClassName}
      />
    </Content>
  </Container>
)


