import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-bottom: 2rem;
  ${t.mq.l} {
    padding: 5rem 0 3rem 0;
  }
`
export const Content = styled.div`
  text-align: center;
  p {
    font-family: ${t.ff.sans2};
    color: ${t.c.darkgrey2};
    padding: 0 2rem;
    ${t.mq.l} {
      padding: 0 6rem;
    }
  }
  ${t.mq.l} {
    width: 76%;
  }
`

export const Image = styled.img`
  width: 100%;
  padding: 0rem;
  object-fit: cover;
  margin-top: -3px;
  ${t.mq.l} {
    width: 50%;
    padding: 0 0.7rem;
  }
`
