import styled from 'react-emotion'
import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  background-color: ${p => (p.bg === 'white' ? t.c.white : t.c.lightgrey1)};
  padding: 3rem 0;
  margin: 0 auto;
  ${t.mq.l} {
    padding: 4rem 0;
  }
`
export const Content = styled.div`
  width: ${t.w.mobile};
  margin: 0 auto;
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
`
export const ImageContainer = styled.div`
  background-color: ${t.c.lightgrey4};
  margin-bottom: ${t.s(1)};
  width: 100%;
  ${t.mq.s} {
    flex: 1 1 0px;
    margin-bottom: 0;
    margin-right: ${t.s(1)};
  }

  ${t.mq.m} {
    margin-right: ${t.s(3)};
    width: 50%;
  }

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${t.mq.m} {
    flex-direction: ${p =>
      p.imagePosition === 'Right' ? 'row' : 'row-reverse'};
  }
`

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${t.s(2)} 0;

  text-align: ${p => (p.imagePosition === 'Right' ? 'right' : 'left')};

  ${t.mq.m} {
    width: 50%;
    padding-right: ${p => (p.imagePosition === 'Right' ? t.s(4) : 0)};
    padding-left: ${p => (p.imagePosition === 'Right' ? 0 : t.s(4))};
  }
`

export const Title = styled.h2`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 400;
  margin-bottom: ${t.s(1)};
  text-transform: uppercase;
  letter-spacing: ${t.ls.heading};
  display: block;
  z-index: 2;
  width: 100%;
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
  ${t.mq.x} {
    font-size: ${t.f(5.5)};
  }
`

export const StyledHTMLContent = styled(HTMLContent)`
  p {
    color: ${t.c.darkgrey2};
    font-family: ${t.ff.sans2};
    font-size: ${t.f(1)};
    ${t.mq.m} {
      font-size: ${t.f(1)};
    }
    ${t.mq.xx} {
      font-size: ${t.f(2)};
    }
  }
`
