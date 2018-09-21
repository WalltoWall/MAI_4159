import styled from 'react-emotion'
import t from 'theme'

import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  background-color: ${t.c.white};
  margin: 0 auto;
  max-width: ${t.ms.xx};
  padding: ${p => (p.hasResults ? t.s(6, 0) : t.s(3, 0))};
  width: 100%;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.m};
`

export const StyledHTMLContent = styled(HTMLContent)`
  text-align: center;
`
