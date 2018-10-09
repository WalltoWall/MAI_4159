import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  ${t.mq.l} {
    padding: 3rem 0;
  }
`
export const Content = styled.div`
  text-align: center;

  p {
    font-family: ${t.ff.sans2};
    color: ${t.c.darkgrey2};
    padding: 0 2rem;
    font-size: ${t.f(-1)};
    line-height: ${t.lh.copy};
    width: 100%;
    margin: 1rem auto;
    ${t.mq.l} {
      width: 80%;
      font-size: ${t.f(0)};
    }
  }
  ${t.mq.l} {
    width: 71%;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  padding: 0rem;
  object-fit: cover;
  display: inline-block;
  ${t.mq.l} {
    width: 50%;
    padding: 0 0.7rem;
  }
`
