import styled from 'react-emotion'
import t from 'theme'

export const BodyCopy = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  font-size: ${t.f(0.3)};
  font-weight: 400;
  margin: 0 auto 2rem auto;
  text-align: center;
  ${t.mq.l} {
    text-align: left;
    margin: 0 auto 2rem 0;
  }
`