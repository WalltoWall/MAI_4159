import styled from 'react-emotion'

import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Header = styled(HTMLContent)`
  color: ${t.c.black};
  font-size: ${t.f(3)};
  margin-bottom: ${t.s(1)};

  h2 {
    text-transform: uppercase;
    text-align: center;
    color: ${t.c.darkgrey1};
    font-size: ${t.f(6)};
    margin-bottom: ${t.s(-4)};
  }
`
