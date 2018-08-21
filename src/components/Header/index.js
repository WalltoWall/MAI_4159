import React from 'react'
import logoicon from 'assets/logo-yellow.svg'
import { Desktop } from 'components/Header/Desktop'

import { Container } from './index.styled'
import { LogoLink, LogoIcon, NavWrapper } from './NavItem.styled'

 export const Header = () => (
  <Container>
    <NavWrapper>
      <LogoLink to="/">
        <LogoIcon src={logoicon} />
      </LogoLink> 
      <Desktop />
    </NavWrapper>
  </Container>
)

