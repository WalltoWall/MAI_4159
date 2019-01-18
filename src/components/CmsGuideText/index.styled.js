import styled from 'react-emotion'

import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  background-color: ${t.c.white};
  margin: 0 auto;

  padding: ${t.s(3, 0)};
  width: 100%;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${t.ms.x};
  width: 100%;
  font-size: ${t.f(1)};
  ${t.mq.m} {
    flex-direction: row;
  }
`

export const Text = styled(HTMLContent)`
  background-color: ${t.c.white};
  flex: auto;
  max-width: ${t.ms.m};
  border-bottom: 1px solid ${t.c.tanLight};
  margin-bottom: ${t.s(2)};
  padding-bottom: ${t.s(2)};
  img {
    max-width: 100%;
  }
  h2 {
    font-family: ${t.ff.sans2};
    font-size: ${t.f(5)};
    margin: 3rem 0;
    font-weight: 700;
    text-transform: uppercase;
  }
  h3 {
    font-family: ${t.ff.sans2};
    font-size: ${t.f(3)};
    font-weight: 700;
    text-transform: uppercase;
    margin: 2rem 0;
  }
  h4 {
    font-family: ${t.ff.sans2};
    font-size: ${t.f(3)};
    font-weight: 600;
    color: ${t.c.darkgrey1};
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: 2rem;
  }
  a {
    color: #a58400;
  }
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${t.mq.m} {
    background-color: transparent;
    border-bottom: 0;
    border-right: 1px solid ${t.c.tanLight};
    flex-basis: 100%;
    margin-bottom: 0;
    margin-right: ${t.s(1)};
    padding: 0 ${t.s(1)} 0 0;
    text-align: left;

    &:nth-child(2n) {
      background-color: transparent;
    }

    &:last-child {
      border-right: 0;
      margin-right: 0;
      padding-right: 0;
    }
  }

  ${t.mq.l} {
    margin-right: ${t.s(3)};
    padding-right: ${t.s(3)};
  }
`
