import styled from 'react-emotion'

import t from 'theme'

export const Container = styled.div`
  background: ${t.c.darkgrey2};
  color: ${t.c.white};
  position: relative;
  top: 0;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
  padding: ${t.s(1)} ${t.s(0)};
`

