import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0;
  padding: 2rem;
`

export const Text = styled.div`
  color: ${p => p.textColor};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  font-weight: 700;
`
