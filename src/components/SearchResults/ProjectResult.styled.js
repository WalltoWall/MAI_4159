import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;  
  height: ${t.s(8)};
  ${t.mq.s} {
    width: 50%;  
  }
  ${t.mq.l} {
    width: 33.333%;  
  }
`

export const Container = styled.div`
  height: 100%;
  list-style: none;
  padding: 0.5rem 0;
  ${t.mq.s} {
    padding: 0.5rem; 
  }
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
  text-align: center;
  text-transform: uppercase;
  font-family: ${t.ff.sans};
  letter-spacing: 1px;
  color: ${t.c.darkgrey1};
`

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${t.c.white};
  width: 100%;
  padding: ${t.s(0)} 0;
  opacity: 0.8;
`