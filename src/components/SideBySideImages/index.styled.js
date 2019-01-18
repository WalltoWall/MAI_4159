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
    width: 48%;
    padding: 0;
    height: ${t.s(7.5)};
    margin: 0 0.5%;
    &:first-child {
      margin-left: 0;
    }
    &:n(2)-child {
      margin-right: 0;
    }
  }
  ${t.mq.l} {
    height: ${t.s(8)};
  }
  ${t.mq.xx} {
    min-height: ${t.s(8)};
  }
  ${t.mq.xxx} {
    min-height: ${t.s(9.5)};
  }
`

export const Description = styled.div`
  font-family: ${t.ff.serif};
  color: ${t.c.darkgrey2};
  padding: 1rem 0;
  font-size: ${t.f(0)};
  line-height: ${t.lh.copy};
  text-align: left;
  ${t.mq.l} {
    font-size: ${t.f(0.3)};
    text-align: center;
    padding: 1rem 2rem;
  }
`

export const StyledContent = styled(Content)`
  justify-content: space-between;
  ${t.mq.m} {
    flex-direction: row;
  }
`
