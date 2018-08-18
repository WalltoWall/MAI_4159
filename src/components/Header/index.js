import React from 'react'
import logoicon from 'assets/logo-yellow.svg'
import { Desktop } from 'components/Header/Desktop'

import { Container, Content, HomeLink, LogoIcon } from './index.styled'

 export const Header = () => (
  <Container>
    <Content>
      <HomeLink to="/">
        <LogoIcon src={logoicon} />
      </HomeLink>
      <Desktop />
    </Content>
  </Container>
)


