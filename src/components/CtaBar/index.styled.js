import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${p => p.background === "dark" ? t.c.darkgrey2 : "white"};
  padding: 5rem 0;
`

export const Content = styled.div`
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  color: ${t.c.white};
  width: 80%;
  text-align: center;
  margin: 0 0 1rem 0;
  ${t.mq.l} {
    width: 40%;
  }
`