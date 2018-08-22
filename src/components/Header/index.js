import React from 'react'
import logoicon from 'assets/logo-yellow.svg'
import { Desktop } from 'components/Header/Desktop'
import { Toggle } from 'react-powerplug'
import { stripUnit } from 'polished'
import HamburgerMenu from 'react-hamburger-menu'

import { Container } from './index.styled'
import { LogoLink, LogoIcon, NavWrapper } from './Desktop.styled'
import { HamburgerMenuContainer } from './Mobile.styled'
import t from 'theme'

 export const Header = () => (
  <Toggle>
      {({on, toggle}) => (
        <Container>
          <NavWrapper>
            <LogoLink to="/">
              <LogoIcon src={logoicon} />
            </LogoLink> 
            <Desktop />
          </NavWrapper>        
          <HamburgerMenuContainer>
            <HamburgerMenu 
              color={t.c.white}
              height={stripUnit(t.s(0.5)) * 16}
              isOpen={on}
              menuClicked={toggle}
              strokeWidth={3}
              width={stripUnit(t.s(1)) * 16}
            />
          </HamburgerMenuContainer>
        </Container>
      )}
  </Toggle>
)

