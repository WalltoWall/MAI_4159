import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.white};
  padding: 4rem 0;
`

export const GridContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  ${t.mq.m} {
    width: ${t.w.mobile};
    justify-content: flex-start;
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }  
`
