import styled from 'react-emotion'
import t from 'theme'

export const SmallHeadline = styled.h1`
  color: ${p => (p.white ? 'white' : '#283f43')};
  font-family: ${t.ff.sans};
  font-size: ${t.f(3.5)};
  font-weight: 400;
  margin-bottom: 0;
  margin: ${p => (p.alignLeft ? '0 0 1rem 0' : '0')};
  text-transform: uppercase;
  letter-spacing: ${t.ls.button};
  text-align: center;
  display: block;
  z-index: 2;
  width: 100%;
  ${t.mq.l} {
    font-size: ${t.f(4.5)};
    text-align: ${p => (p.alignLeft ? 'left' : 'center')};
  }
`
