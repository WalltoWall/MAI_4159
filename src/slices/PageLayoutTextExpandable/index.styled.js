import styled from 'react-emotion'

import t from 'theme'
import { ExpandButton } from 'components/ExpandButton'
import { HTMLContent } from 'components/HTMLContent'
import Expand from 'react-expand-animated'

export const Container = styled.div`
  margin: 0 auto;
  padding: 4rem;
  position: relative;
  background-color: ${t.c.white};
`

export const Content = styled.div`
  display: flex;
  margin: 1rem auto;
`

export const Intro = styled(HTMLContent)`
  cursor: pointer;
  h1 {
    font-family: ${t.ff.sans};
    font-size: ${t.s(1)};
    font-weight: 600;
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
    line-height: 0.4rem;
  }
`

export const StyledExpandButton = styled(ExpandButton)`
  display: inline-block;
  margin: 0 0 0 0.3rem;
`

export const Category = styled.div`
  display: flex;
  margin: 0 atuo;
  width: 100%;
  justify-content: space-around;
`

export const StyledExpand = styled(Expand)`
  width: 100%;
  display: block;
`

export const Title = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${t.ls.heading};
  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
`