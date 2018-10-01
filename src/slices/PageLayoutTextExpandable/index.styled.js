import styled from 'react-emotion'

import t from 'theme'
import { ExpandButton } from 'components/ExpandButton'
import { HTMLContent } from 'components/HTMLContent'
import Expand from 'react-expand-animated'

export const Container = styled.div`
  margin: 0 auto;
  padding: ${t.s(3, 0)};
  position: relative;
  width: 60%;
  background-color: ${t.c.white};
`

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
`

export const Intro = styled(HTMLContent)`
  h1 {
    font-family: ${t.ff.sans};
    font-size: ${t.s(1)};
    font-weight: 600;
    letter-spacing: 0.1rem;
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
  margin-top: ${t.s(1)};
  text-align: center;
`

export const StyledExpandButton = styled(ExpandButton)`
  display: inline-block;
  margin: 0.2rem 0.8rem;
`


export const Desktop = styled.div`
    display: block;
`

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const StyledExpand = styled(Expand)`
  width: 100%;
  display: block;
`