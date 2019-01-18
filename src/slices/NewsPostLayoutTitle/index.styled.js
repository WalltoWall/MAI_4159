import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  width: 100%;
  background-color: ${t.c.white};
  padding: ${t.s(4)} 1rem 0 1rem;
  ${t.mq.l} {
    padding: ${t.s(5)} 0 0 0;
  }
`

export const PostDate = styled.div`
  font-family: ${t.ff.sans2};
  text-align: center;
  font-weight: 700;
  font-size: ${t.f(0)};
  color: ${t.c.darkgrey2};
  text-transform: uppercase;
  letter-spacing: ${t.ls.button};
  margin-top: 0.3rem;
`
