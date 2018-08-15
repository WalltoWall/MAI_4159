import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div``

export const Text = styled.div`
  color: ${p => p.textColor};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
`
