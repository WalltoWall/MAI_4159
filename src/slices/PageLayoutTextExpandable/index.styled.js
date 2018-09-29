import styled from 'react-emotion'

import t from 'theme'
import { ExpandButton } from 'components/ExpandButton'
import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  background-color: ${t.c.white};
  margin: 0 auto;
  max-width: ${t.ms.xx};
  padding: ${t.s(3, 0)};
  position: relative;
  width: 100%;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.m};
  position: relative;
  ${Container} + ${Container} & {
    &::before {
      border-top: 1px solid ${t.c.tanLight};
      content: '';
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      top: -${t.s(3)};
    }
  }
`

export const Intro = styled(HTMLContent)`
  h1 {
    font-family: ${t.ff.sans2};
    font-size: ${t.s(2)};
  }
`

export const Highlights = styled.div`
  margin-top: ${t.s(2)};
  ${t.mq.s} {
    display: flex;
  }
`

export const Highlight = styled.div`
  margin-bottom: ${t.s(1)};
  ${t.mq.s} {
    flex: 1 1 0px;
    margin-bottom: 0;
    margin-right: ${t.s(2)};
    &:nth-child(2n):last-child {
      flex: 0 1 calc((100% * 2 / 3) - ${t.s(2)} / 2);
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
`

export const HighlightText = styled(HTMLContent)`
  margin-bottom: ${t.s(-2)};
  &:last-child {
    margin-bottom: 0;
  }
  .large {
    line-height: 1;
  }
`

export const HighlightFootnote = styled(HTMLContent)`
  font-size: 80%;
`

export const Text = styled(HTMLContent)`
  margin-top: ${t.s(1)};
`

export const StyledExpandButton = styled(ExpandButton)`
  margin-top: ${t.s(1)};
  display: inline-block;
`

export const Mobile = styled.div`
  ${t.mq.m} {
    display: none;
  }
`

export const Desktop = styled.div`
  display: none;
  ${t.mq.m} {
    display: block;
  }
`
