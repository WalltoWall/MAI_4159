import React from 'react'
import logoicon from 'assets/logo-yellow.svg'

import { Container, Content, Title, TitleLink, LogoIcon } from './index.styled'

export const Header = ({ siteTitle }) => (
  <Container>
    <Content>
    	<LogoIcon src={logoicon} />
      <Title>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </Title>
    </Content>
  </Container>
)
