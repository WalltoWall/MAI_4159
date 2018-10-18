import styled from 'react-emotion'
import {css} from 'emotion'
import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  width: 100%; 
  background-color: ${t.c.lightgrey2};
  padding: ${t.s(3)} 0 ${t.s(3)} 0;
  ${t.mq.l} {
    padding: ${t.s(5.5)} 0 ${t.s(4)} 0;
  }
`

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  ${t.mq.l} {
    flex-direction: row;
    width: 55%;
  }
`

export const Column = styled.div`
  width: 100%;
  h3 {
    color: ${t.c.darkgrey1};
    font-size: ${t.f(0)};   
    margin: 0;
    font-weight: 600;
    font-family: ${t.ff.sans2};
  }  
  p {
    margin: 5px 0 0 0;
    font-family: ${t.ff.sans2};
    color: ${t.c.darkgrey2};
    line-height: ${t.lh.copy};
    ${t.mq.l} {         
      padding: 0 ${t.s(4)} 0 0;
    } 
  }
  ${t.mq.l} {
    width: ${p=> p.fullWidth ? '100%' : '50%'};
  }
`

export const TextBlock = styled.div`
  margin: ${t.s(1)} 0;
`

export const Title = styled.div`
  font-size: ${t.f(4)};
  letter-spacing: 1px;
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
`

export const paddingTop = css`
  ${t.mq.l} {
    padding-top: ${t.s(3)};
  }
`
export const MobilePadding = styled.div`
  padding-top: ${t.s(3)};
  display: block;
  ${t.mq.l} {
    display: none;
  }
`

export const HTMLParagraph = styled(HTMLContent)`
  margin: 5px 0 0 0;
  color: ${t.c.darkgrey2};
  ${t.mq.l} {         
    padding: 0 ${t.s(4)} 0 0;
  } 
  p {
    margin: 5px 0;
  }
`