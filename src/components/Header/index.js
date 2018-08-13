import React from 'react'

import { Container, Content, Title, TitleLink } from './index.styled'

export const Header = ({ siteTitle }) => (
  <Container>
    <Content>
      <Title>
        <TitleLink to="/">
          {siteTitle}
        </TitleLink>
      </Title>
    </Content>
  </Container>
)
