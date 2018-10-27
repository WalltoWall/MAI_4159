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
  width: ${t.w.mobile};
  p {
    font-family: ${t.ff.serif};
    color: ${t.c.darkgrey2};
    padding: 0 2rem;
    font-size: ${t.f(0)};
    line-height: ${t.lh.copy};
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
    margin-top: -3rem;
    font-size: ${t.f(0.3)};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  object-fit: cover;
  max-height: 400px;
  overflow: hidden;
  ${t.mq.l} {
    max-height: 600px;
  }
`
