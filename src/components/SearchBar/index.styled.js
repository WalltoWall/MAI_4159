import styled from 'react-emotion'
import { transparentize } from 'polished'
import t from 'theme'
import { Button } from 'components/Button'
import { ReactComponent as AssetIconSearchSVG } from 'assets/icon-search.svg'

export const Container = styled.div`
  box-shadow: 0 2px 4px ${transparentize(0.75, t.c.black)},
    0 1px 0 ${transparentize(0.9, t.c.black)};
  padding: 0 ${t.s(0)};
  position: relative;
  z-index: 2;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  line-height: ${t.lh.solid};
  margin: 0 auto;
  max-width: ${t.ms.x};
  padding: ${t.s(1)} 0;
`

export const Form = styled.form`
  display: flex;
  min-width: 30%;
  width: 100%;

  ${t.mq.m} {
    width: auto;
  }
`

export const SearchQuery = styled.input`
  -webkit-appearance: none;
  border-bottom-left-radius: 10rem;
  border-top-left-radius: 10rem;
  border: 0.05rem solid ${t.c.black};
  border-right-width: 0;
  color: ${t.c.black};
  flex-grow: 1;
  font-size: ${t.f(1)};
  padding: ${t.s(-1, 0)};

  &::placeholder {
    color: ${t.c.black};
  }
`

const StyledButton = styled(Button)`
  -webkit-appearance: none;
  align-items: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 10rem;
  border-top-left-radius: 0;
  border-top-right-radius: 10rem;
  border: 0;
  cursor: pointer;
  display: flex;
  padding: ${t.s(-2, 0)};
  min-width: 0;
`

export const SearchButton = StyledButton.withComponent('button')

export const SearchButtonIcon = styled(AssetIconSearchSVG)`
  height: ${t.s(0)};
  transform: translate(-10%, -5%);
  width: ${t.s(0)};
`
