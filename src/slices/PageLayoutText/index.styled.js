import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.white};
  margin: 0 auto;
  max-width: ${t.ms.xx};

  ${t.mq.m} {
    padding: ${t.s(3, 0)};
  }
`
