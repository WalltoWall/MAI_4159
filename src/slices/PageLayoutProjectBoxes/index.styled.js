import styled from 'react-emotion'
import t from 'theme'

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: ${t.w.mobile};
  margin: 2rem auto;
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
`

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: block;
  padding: 4rem 0;
  ${t.mq.l} {
    min-height: 50vh;
    padding: 6rem 0;
  }
`

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
`
