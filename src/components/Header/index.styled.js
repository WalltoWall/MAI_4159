import styled from 'react-emotion'
import { Link } from 'gatsby'

import t from 'theme'

export const Container = styled.div`
  background: ${t.c.black};
  color: ${t.c.white};
  margin-bottom: ${t.s(0)};
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
  padding: ${t.s(1)} ${t.s(0)};
`

export const Title = styled.h1`
  margin: 0;
`

export const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
