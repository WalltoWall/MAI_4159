import styled from 'react-emotion'
import { Link } from 'gatsby'

import t from 'theme'

export const Container = styled.div`
  background: ${t.c.darkgrey2};
  color: ${t.c.white};
  postition: fixed;
  top: 0;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
  padding: ${t.s(1)} ${t.s(0)};
`

export const HomeLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const LogoIcon = styled.img`
	width: 70px;
  display: inline-block;
  padding-bottom: 24px;
`

export const NavWrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  margin-left: 1.2rem;
`

export const NavList = styled.li`
  color: pink;
  list-style-type: none;
  font-size: 1.1rem;
  line-height: 1.7rem;
  font-weight: 600;
`

