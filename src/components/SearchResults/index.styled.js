import styled from 'react-emotion'

import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div``

export const StyledHTMLContent = styled(HTMLContent)`
  margin-bottom: ${t.s(1)};

  ${t.mq.m} {
    margin-bottom: ${t.s(2)};
  }
`

export const Items = styled.ul`
  margin: 0;
  padding: 0;
`
