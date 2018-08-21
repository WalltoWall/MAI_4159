import React from 'react'
import logoicon from 'assets/logo-yellow.svg'
import { Desktop } from 'components/Header/Desktop'

import { Container, LogoLink, LogoIcon, NavWrapper } from './index.styled'

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


