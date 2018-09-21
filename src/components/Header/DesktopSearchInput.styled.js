import styled from 'react-emotion'
import { transparentize } from 'polished'

import t from 'theme'
import { ReactComponent as AssetIconSearchSVG } from 'assets/icon-search.svg'

export const Container = styled.li`
  list-style: none;
  margin-left: -${t.s(-3)};
`

export const Form = styled.form`
  display: flex;
`

export const SearchQuery = styled.input`
  -webkit-appearance: none;
  background-color: ${transparentize(0.35, t.c.white)};
  border: 0;
  border-radius: 10rem;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  color: ${t.c.black};
  flex-grow: 1;
  font-size: ${t.f(-1)};
  font-weight: inherit;
  outline: 0;
  padding: ${t.s(-5, -1)};
  transition-duration: ${t.t};
  transition-property: background-color, width;
  width: ${t.s(4.5)};

  ${Container}:hover &,
  &:focus,
  &:hover {
    background-color: ${t.c.white};
  }

  ${t.mq.x} {
    &:focus {
      width: ${t.s(5.5)};
    }
  }

  &::placeholder {
    color: ${transparentize(0.25, t.c.black)};
  }
`

export const SearchButton = styled.button`
  -webkit-appearance: none;
  align-items: center;
  background-color: ${transparentize(0.35, t.c.white)};
  border-radius: 10rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border: 0;
  border: 0;
  cursor: pointer;
  display: flex;
  min-width: 0;
  padding: ${t.s(-2.5, -1)};
  transition: background-color ${t.t};

  ${Container}:hover &,
  ${SearchQuery}:focus + & {
    background-color: ${t.c.black};
  }
`

export const SearchButtonIcon = styled(AssetIconSearchSVG)`
  height: ${t.s(-0.5)};
  transform: translateY(-5%);
  width: ${t.s(-0.5)};

  ${Container}:hover &,
  ${SearchButton}:focus &,
  ${SearchQuery}:focus + ${SearchButton} & {
    path {
      fill: ${t.c.white};
    }
  }

  path {
    fill: ${t.c.black};
    transition: fill ${t.t};
  }
`
