import React from 'react'
import logoicon from 'assets/logo-yellow.svg'

import { Container, Content, HomeLink, LogoIcon } from './index.styled'

 export const Header = () => (
  <Container>
    <Content>
      <HomeLink to="/">
        <LogoIcon src={logoicon} />
      </HomeLink>
    </Content>
  </Container>
)


