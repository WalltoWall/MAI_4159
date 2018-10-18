import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;  
  height: ${t.s(8.5)};
  ${t.mq.l} {
    width: 33.333%;  
  }
`

export const Container = styled.div`
  height: 100%;
  list-style: none;
  padding: 10px;
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;  
  
`
export const Title = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  background-color: #f6f4f2d1;
  width: 100%;
  padding: ${t.s(0)} 0;
  text-transform: uppercase;
  font-family: ${t.ff.sans};
  letter-spacing: 1px;
  color: ${t.c.darkgrey1};
`