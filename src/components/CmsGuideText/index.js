import React from 'react'
import { get } from 'lodash'
import { Container, Texts, Text } from './index.styled'

export const CmsGuideText = ({ data }) => (
  <Container>
    <Texts>
      <Text html={get(data, 'primary.text.html')} centerOnDesktop={true} />
    </Texts>
  </Container>
)
