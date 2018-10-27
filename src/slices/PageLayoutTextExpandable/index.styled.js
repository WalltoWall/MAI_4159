import styled from 'react-emotion'
import t from 'theme'
import { ExpandButton } from 'components/ExpandButton'
import { HTMLContent } from 'components/HTMLContent'
import Expand from 'react-expand-animated'

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  background-color: ${t.c.white};
  ${t.mq.m} {
    padding: 4rem 0;
  }
`

export const TextBlock = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  width: 100%;
  ${t.mq.m} {
    margin: 1rem auto;
    justify-content: center;
  }
`

export const Content = styled.div`
  width: ${t.w.mobile};
  margin: 0 auto;
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
`

export const Intro = styled(HTMLContent)`
  cursor: pointer;
  h1 {
    font-family: ${t.ff.sans};
    font-size: ${t.s(1)};
    font-weight: 400;
    letter-spacing: ${t.ls.button};
    text-transform: uppercase;
    color: ${t.c.darkgrey2};
  }
`

export const Highlights = styled.div`
  margin-top: ${t.s(2)};
  ${t.mq.s} {
    display: flex;
  }
`

export const Text = styled(HTMLContent)`
  margin: 1rem auto 2rem auto;
  text-align: center;

  p {
    font-family: ${t.ff.sans2};
    color: ${t.c.darkgrey2};
    line-height: 1.3rem;
    margin-top: -0.7rem;
    text-align: left;

    ${t.mq.m} {
      text-align: center;
    }
  }
  h3 {
    color: ${t.c.darkgrey1};
    font-family: ${t.ff.sans2};
    font-size: ${t.f(0)};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
    margin-bottom: 1.4rem;
  }
`

export const StyledExpandButton = styled(ExpandButton)`
  display: block;
  margin: 0 0 0 1rem;
  ${t.mq.m} {
    margin: 0.1rem 0 0 0.3rem;
  }
`

export const Category = styled.div`
  display: flex;
  margin: 0 atuo;
  width: 100%;
  justify-content: space-between;
`

export const StyledExpand = styled(Expand)`
  width: 100%;
  display: block;
`