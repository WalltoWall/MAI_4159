import styled from 'react-emotion'
import {css} from 'emotion'
import t from 'theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${t.c.lightgrey3};
  padding: 3rem 0;
  ${t.mq.l} {
    padding: 7rem 0;
  }
`

export const LeftColumn = styled.div`
  width: 100%;
  padding: 0 1rem;
  ${t.mq.l} {
    width: 35%;  
    padding: 0 2rem 0 5rem;
  }
`

export const RightColumn = styled.div`
  width: 100%;
  padding: 0 1rem; 
  ${t.mq.l} {
    width: 35%;  
    padding: 0 5rem 0 2rem; 
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${t.c.darkgrey1};
    font-family: ${t.ff.sans2};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 3rem;
    ${t.mq.l} {
      margin-top: 0;
    }
  }
`

export const StyledHtmlClassName = css`
  h2 {
    font-size: 1.5rem;
    font-family: ${t.ff.serif};
    font-weight: 600;
    color: ${t.c.darkgrey1};
  }
  p {
    color: ${t.c.darkgrey2};
  }
`