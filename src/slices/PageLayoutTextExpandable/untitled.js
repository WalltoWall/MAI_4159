import styled from 'react-emotion'
import t from 'theme'
import { Button } from 'components/Button'
import { BodyCopy } from 'components/BodyCopy'
import { Headline } from 'components/Headline'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: ${t.c.white};
  position: relative;
  display: block;
  margin: 0 auto;
`

export const StyledHeadline = styled(Headline)`
  text-align: center;
  ${t.mq.l} {
    text-align: left;
  }
`

export const Description = styled(BodyCopy)`
  max-width: 450px;
`

export const SplitPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const DescriptionWrapper = styled.div`
  width: ${t.w.mobile};
  padding: 3rem 0;
  order: 2;
  ${t.mq.l} {
    width: 45%;
    order: 1;
  }
`

export const ServicesButton = styled(Button)`
  float: none;
  ${t.mq.l} {
    float: left;
  }
`

export const Content = styled.div`
  max-width: none;
  float: none;
  ${t.mq.l} {
    float: right;
    max-width: 600px;
  }
`
