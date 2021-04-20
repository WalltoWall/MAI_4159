import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;

  padding: ${p => (p.normalizeMargin === 'True' ? '2rem 0' : '0 0 2rem 0')};
  ${t.mq.l} {
    padding: ${p => (p.normalizeMargin === 'True' ? '4rem 0' : '0 0 4rem 0')};
  }
`
export const Content = styled.div`
  text-align: center;
  width: ${t.w.mobile};
  p {
    font-family: ${t.ff.serif};
    color: ${t.c.darkgrey2};
    font-size: ${t.f(0)};
    line-height: ${t.lh.copy};
  }
  ${t.mq.l} {
    width: ${t.w.desktop};
    margin-top: ${p => (p.normalizeMargin === 'True' ? '0' : '-3rem')};
    font-size: ${t.f(0.3)};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`

export const ImageContainer = styled.div`
  background-color: ${t.c.lightgrey4};
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`
