import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'

export const Container = styled.li`
  list-style: none;
  margin-right: ${p => (p.secondary ? t.s(1) : t.s(2))};
  position: relative;
  transition: color ${t.t};

  &:hover {
    color: ${t.c.white};
  }

  &:last-child {
    margin-right: 0;
  }
`

export const linkClassName = secondary => css`
  border-bottom: ${secondary ? 0 : t.s(-5)} solid transparent;
  display: block;
  margin-bottom: ${secondary ? 0 : `-${t.s(1)}`};
  padding-bottom: ${secondary ? 0 : `calc(${t.s(1)} - ${t.s(-5)})`};
  transition: border-bottom-color ${t.t};
`

export const linkActiveClassName = css`
  border-bottom-color: ${t.c.white};
  color: red;
`