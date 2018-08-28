import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const StyledLink = styled(Link)`
  display: inline-block;
  width: 50%;
  height: 500px;
`
export const Grid = styled.div`
  background-image: url(${p => p.background ? p.background : 'none'});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
 `
export const GridTitle = styled.h1`
  font-size: ${t.f(5)};
  color: ${t.c.white};
`