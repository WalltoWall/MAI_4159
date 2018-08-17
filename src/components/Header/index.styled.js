import styled from 'react-emotion'
import { Link } from 'gatsby'

import t from 'theme'

export const Container = styled.div`
  background: ${t.c.darkgrey1};
  color: ${t.c.white};
  margin-bottom: ${t.s(0)};
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
	margin: 0 2rem;
`