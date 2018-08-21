import React from 'react'
import logoicon from 'assets/logo-yellow.svg'
import { Desktop } from 'components/Header/Desktop'

import { Container, Content, HomeLink, LogoIcon, NavWrapper } from './index.styled'

 export const Header = () => (
  <Container>
    <NavWrapper>
      <HomeLink to="/">
        <LogoIcon src={logoicon} />
      </HomeLink> 
      <Desktop />
    </NavWrapper>
  </Container>
)


