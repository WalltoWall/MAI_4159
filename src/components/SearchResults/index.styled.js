import styled from 'react-emotion'

import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  max-width: none;
  width: ${t.w.mobile};
  margin: 0 auto;
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const StyledHTMLContent = styled(HTMLContent)`
  margin-bottom: ${t.s(1)};

  ${t.mq.m} {
    margin-bottom: ${t.s(2)};
  }
  p {
    text-align: center;
    color: ${t.c.lightgrey3};
    font-family: ${t.ff.sans2};
  }
`

export const Items = styled.ul`
  margin: 0;
  padding: 0;
`

export const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: ${t.ff.sans};
  letter-spacing: 1px;
  color: ${t.c.darkgrey1};
  font-size: ${t.f(5)};
`

export const Query = styled.p`
  font-weight: 700;
  display: inline;
  text-transform: uppercase;
`
