import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { ReactComponent as AssetIconSearchSVG } from 'assets/icon-search.svg'

export const Container = styled.div`
  padding: 0 ${t.s(0)};
  position: relative;
  z-index: 2;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: ${t.ms.x};
  padding: ${t.s(1)} 0;
`

export const Form = styled.form`
  margin-top: ${t.s(0)};
  display: flex;
  min-width: 30%;
  width: 100%;

  ${t.mq.m} {
    width: auto;
  }
  input {
    background-color: ${t.c.lightgrey2};
    font-family: ${t.ff.sans2};
    // color: ${t.c.darkgrey2};
  }
`

export const SearchQuery = styled.input`
  -webkit-appearance: none;
  border: none;
  color: ${t.c.black};
  flex-grow: 1;
  font-size: ${t.f(1)};
  padding: ${t.s(-1, 0)};
  &::placeholder {
    color: ${t.c.darkgrey2};
  }
`

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  padding: ${t.s(-2, 0)};
  min-width: 0;
  background-color: ${t.c.yellow};
  color: white;
  cursor: pointer;
  font-family: ${t.ff.sans};
  font-weight: 600;
  letter-spacing: 1px;
  padding: t.s(-2, -0);
  font-size: t.f(-1);
  display: block;
  width: '100px';
  text-align: center;
  text-transform: uppercase;
  font-size: ${t.f(2)};
  margin: 0 auto;
  transition: background-color 200ms;
  &:hover {
    background-color: ${t.c.darkyellow};
  }
`

export const SearchButton = StyledButton.withComponent('button')

export const SearchButtonIcon = styled(AssetIconSearchSVG)`
  height: ${t.s(0)};
  transform: translate(0%, 20%);
  width: ${t.s(0)};
`
