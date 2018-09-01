import styled from 'react-emotion'
import t from 'theme'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
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
    width: 75%;
    margin-top: -3rem;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
