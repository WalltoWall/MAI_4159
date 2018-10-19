import styled from 'react-emotion'
import t from 'theme'
import { Content } from 'components/Content'

export const Container = styled.div`
  padding: 2rem 0;
  background-color: white;
  ${t.mq.l} {
    padding: 4rem 0;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  object-fit: cover;
  display: inline-block;
  overflow: hidden;
  ${t.mq.m} {
    width: 49%;
    padding: 0;
  }
`

export const Description = styled.div`
  font-family: ${t.ff.serif};
  color: ${t.c.darkgrey2};
  padding: 1rem 2rem;
  font-size: ${t.f(0)};
  line-height: ${t.lh.copy};
  text-align: center;
`

export const StyledContent = styled(Content)`
  justify-content: space-between;
  ${t.mq.m} {
    flex-direction: row;
  }
`
