import React from 'react'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { Content } from 'components/Content'
import {
  Container,
  LeftColumn,
  RightColumn,
  StyledHtmlClassName,
} from './index.styled'

export const SideBySideText = ({ data }) => (
  <Container>
    <Content>
      <LeftColumn>
        <HTMLContent
          html={get(data, 'primary.left_text.html')}
          className={StyledHtmlClassName}
        />
      </LeftColumn>
      <RightColumn>
        <HTMLContent
          html={get(data, 'primary.right_text.html')}
          className={StyledHtmlClassName}
        />
      </RightColumn>
    </Content>
  </Container>
)
