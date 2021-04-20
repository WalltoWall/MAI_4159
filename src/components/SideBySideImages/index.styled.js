import styled from 'react-emotion'
import t from 'theme'
import { Image } from 'components/Image'

export const Container = styled.div`
  background-color: white;
  padding: 2rem 0;

  ${t.mq.l} {
    padding: 4rem 0;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
export const Images = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${t.w.mobile};
  flex-direction: column;

  ${t.mq.s} {
    align-items: center;
    flex-direction: row;
  }

  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    max-width: ${t.w.xl};
  }
`

export const ImageContainer = styled.div`
  background-color: ${t.c.lightgrey4};
  margin-bottom: ${t.s(1)};

  ${t.mq.s} {
    flex: 1 1 0px;
    margin-bottom: 0;
    margin-right: ${t.s(1)};
  }

  ${t.mq.m} {
    margin-right: ${t.s(3)};
  }

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`
export const StyledImage = styled(Image)``

export const CaptionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  ${t.mq.l} {
    width: 65%;
  }
`

export const Caption = styled.div`
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
