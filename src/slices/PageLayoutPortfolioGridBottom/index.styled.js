import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${t.ff.sans};
`
export const StyledLink = styled(Link)`
  display: inline-block;
  width: 50%;
  ${t.mq.l} {
    width: 33.3333%;
  }
`
export const Grid = styled.div`
  position: relative;
  background-image: url(${p => p.background ? p.background : 'none'});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60%;
 `
export const GridTitle = styled.h1`
  position: absolute;
  top: 35%;
  font-size: ${t.f(1)};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  font-weight: 700;
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
`