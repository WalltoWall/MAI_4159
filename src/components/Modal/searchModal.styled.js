import styled from 'react-emotion'

import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Header = styled(HTMLContent)`
  color: ${t.c.black};
  font-size: ${t.f(3)};
  margin-bottom: ${t.s(2)};

  h2 {
    font-size: ${t.f(6)};
    margin-bottom: ${t.s(-4)};
  }
`
