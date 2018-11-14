import React from 'react'
import logoicon from 'assets/logo-yellow.svg'
import { Desktop } from 'components/Header/Desktop'
import { Toggle } from 'react-powerplug'
import { stripUnit } from 'polished'
import HamburgerMenu from 'react-hamburger-menu'
import { Container } from './index.styled'
import { LogoLink, NavWrapper } from './Desktop.styled'
import { HamburgerMenuContainer, StyledMobile } from './Mobile.styled'

import t from 'theme'

export const Header = () => (
  <Toggle initial={{on: true}}>
    {({ on: mobileNavOn, toggle: toggleMobileNav }) => (
      <>
        <Container>
          <LogoLink to="/">
            <img src={logoicon} alt="" />
          </LogoLink>
          <NavWrapper>
            <Desktop />
          </NavWrapper>
          <HamburgerMenuContainer>
            <HamburgerMenu
              color={t.c.white}
              height={stripUnit(t.s(0.5)) * 16}
              isOpen={mobileNavOn}
              menuClicked={toggleMobileNav}
              strokeWidth={3}
              width={stripUnit(t.s(1)) * 16}
            />
          </HamburgerMenuContainer>
        </Container>
        <StyledMobile isOpen={mobileNavOn} toggle={toggleMobileNav} />
      </>
    )}
  </Toggle>
)
