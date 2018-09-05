import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${t.c.white};
  padding: 3rem 0 5rem 0;
`

export const Title = styled.h2`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.s(2)};
  color: ${t.c.darkgrey1};
  letter-spacing: 2px;
`

export const Content = styled.div`
  color: ${t.c.darkgrey1};
  width: 80%;
  text-align: center;
  margin: -1rem 0 1rem 0;
  ${t.mq.l} {
    width: 60%;
  }
`
export const Image = styled.img`
  width: 100%;
  padding: 0rem;
  object-fit: cover;
  ${t.mq.l} {
    width: 50%;
    padding: 0 0.7rem;
  }
`
