import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: ${t.ms.xx};
  min-height: 60vh;
  padding: ${t.s(3, 0)};
  position: relative;

  ${t.mq.m} {
    min-height: ${t.s(9)};
  }

  ${t.mq.l} {
    min-height: ${t.s(10)};
  }
`

export const Text = styled.div`
  color: ${p => p.textColor};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
`
const ImageContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    height: 100%;
  }
`