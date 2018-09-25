import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  height: auto;
  background-color: ${t.c.darkgrey1};
  position: relative;
  overflow: hidden;

  ${t.mq.l} {
    height: 800px;
    background-color: ${t.c.white};
  }
`

export const HeadlineWrapper = styled.div`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-weight: 600;
  display: block;
  width: 100%;
  background-color: ${t.c.darkgrey1};
  padding: 2rem;
  z-index: 2;
  -webkit-transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  -ms-transform: rotate(-7deg) translate(0, -50px) scale(1.2);
  transform: rotate(-7deg) translate(0, -50px) scale(1.2);

  ${t.mq.l} {
    position: absolute;
    margin-left: 2rem;
    width: auto;
    background-color: transparent;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
`
