import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  text-align: center;
  padding: 4rem 0 6rem 0;
  background-color: ${t.c.lightgrey1};
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 2rem auto;  
  ${t.mq.m} {
    align-items: flex-start;
    width: ${t.w.mobile};
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const Headline = styled.h1`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  display: block;
  z-index: 2;
  width: 100%;
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
`
