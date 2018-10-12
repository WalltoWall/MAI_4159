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
  input {
    padding: 0;    
    ::placeholder {
      color: ${t.c.lightgrey4};
    }
  }
  width: 80%;
  margin: 0 auto;
`

export const SearchQuery = styled.input`
  -webkit-appearance: none;
  background: none;
  border: none;
  border-bottom: 1px solid ${t.c.lightgrey4};
  color: ${t.c.lightgrey4};
  flex-grow: 1;
  font-size: ${t.f(4)};
  text-transform: uppercase;
  font-weight: inherit;
  outline: 0;
  padding: ${t.s(-5, -1)};
  transition-duration: ${t.t};
  transition-property: background-color, width;
  width: ${t.s(4.5)};

  // ${Container}:hover &,
  // &:focus,
  // &:hover {
  //   background-color: ${t.c.white};
  // }

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
  border: 0;
  border-bottom: 1px solid ${t.c.lightgrey4};
  cursor: pointer;
  display: flex;
  min-width: 0;
  padding: ${t.s(-2.5, -1)};
  transition: background-color ${t.t};
  background: none;

`

export const SearchButtonIcon = styled(AssetIconSearchSVG)`
  height: ${t.s(1.5)};  
  width: ${t.s(1.5)};

  // ${Container}:hover &,
  // ${SearchButton}:focus &,
  // ${SearchQuery}:focus + ${SearchButton} & {
  //   path {
  //     fill: ${t.c.white};
  //   }
  // }

  path {
    fill: ${t.c.yellow};
    transition: fill ${t.t};
  }
`
