import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 0 4rem 0;
  background-color: ${t.c.white};
`

export const QuoteWrapper = styled.div`
  background-color: ${t.c.yellow};
  display: block;
  margin: 0 auto;
  padding: 2rem;
  width: ${t.w.mobile};
  position: relative;
   ${t.mq.m} {
  	padding: 3rem;
  }
  ${t.mq.l} {
  	width: ${t.w.desktop};
  	padding: 4rem;
  }
  ${t.mq.x} {
  	width: ${t.w.xl};
  }
`

export const Quote = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.serif};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 2rem;
  ${t.mq.l} {
  	font-size: 1.6rem;
  	line-height: 2.6rem;
  }
`

export const Author = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  font-size: 1rem;
  margin-top: 1rem;
`


export const QuoteMark = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  font-size: 10rem;
  position: absolute;
  top: -50px;
  &:before {
  	content: ' “ ';
  }
   ${t.mq.l} {
  	font-size: 14rem;
  }
`


