import styled from 'react-emotion'
import t from '../theme'

export const Content = styled.div`
  width: ${t.w.mobile};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${t.mq.l} {
    flex-direction: row;
    width: ${t.w.desktop};
    justify-content: space-around;
  }
`
