import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { ReactComponent as AssetIconSearchSVG } from 'assets/icon-search.svg'

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: ${t.w.mobile};
  margin: 0 auto;
  ${t.mq.l} {
    width: ${t.w.desktop};
  }
  ${t.mq.x} {
    width: ${t.w.xl};
  }
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
  min-width: 200px;
  width: 100%;

  ${t.mq.m} {
    width: auto;
    min-width: 350px;
  }
  input {
    background-color: ${t.c.lightgrey2};
    font-family: ${t.ff.sans};
    letter-spacing: ${t.ls.button};
    font-size: ${t.f(2)};
  }
`

export const SearchQuery = styled.input`
  -webkit-appearance: none;
  border: none;
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  font-weight: 400;
  text-transform: uppercase;
  flex-grow: 1;
  font-size: ${t.f(1)};
  padding: ${t.s(-1, 0)};
  &::placeholder {
    color: ${t.c.darkgrey2};
    ${t.ls.button};
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
  min-width: 50px;
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

export const MobileContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${t.s(1)};
  width: 100%;
  background-color: ${t.c.lightgrey3};
  padding: 0 0 ${t.s(1.5)} 0;
`

export const MobileForm = styled.form`
  margin-top: ${t.s(0)};
  display: flex;
  width: 60%;
  margin-left: ${t.s(2)};
  input {
    background-color: transparent;
    font-family: ${t.ff.sans};
    letter-spacing: ${t.ls.button};
    font-size: ${t.f(2)};
    border-bottom: 1px solid white;
  }
`

export const MobileSearchQuery = styled.input`
  -webkit-appearance: none;
  border: none;
  color: ${t.c.white};
  font-size: ${t.f(2)};
  font-family: ${t.ff.sans2};
  flex-grow: 1;
  &::placeholder {
    color: ${t.c.white};
    ${t.ls.button};
  }
`

const MobileStyledButton = styled(Link)`
  border: none;
  padding: ${t.s(-2, 0)};
  color: white;
  cursor: pointer;
  display: block;
  background: transparent;
`

export const MobileSearchButton = MobileStyledButton.withComponent('button')

export const MobileSearchButtonIcon = styled(AssetIconSearchSVG)`
  height: ${t.s(0)};
  width: ${t.s(0)};
  margin-left: -${t.s(3.5)};
`
