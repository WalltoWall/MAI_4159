import React from 'react'
import { get } from 'lodash'
import {
  Container,
  StyledHtmlClassName,
  StyledHTMLContent,
  Headline,
} from './index.styled'
import { Content } from 'components/Content'

export const TextBlock = ({ data }) => {
  return (
    <Container background_color={get(data, 'primary.background_color')}>
      <Content>
        <Headline>{get(data, 'article_title1.text')}</Headline>
        <Headline>{get(data, 'publish_date')}</Headline>
        <StyledHTMLContent
          html={get(data, 'primary.content.html')}
          className={StyledHtmlClassName}
          align_text={get(data, 'primary.align_text')}
        />
      </Content>
    </Container>
  )
}
