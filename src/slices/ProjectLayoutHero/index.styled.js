import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
export const Container = styled.div`
  height: 600px;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  ${t.mq.l} {
    flex-direction: row;
    height: 850px;
  }
`

export const Content = styled.div`
  z-index: 2;
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  ${t.mq.l} {
    padding: 0 2rem 3rem 3.5rem;
    width: 50%;
  }
  ${t.mq.x} {
    width: 50%;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${t.mq.m} {
  }
  ${t.mq.l} {
    margin-left: 20%;
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.darkgrey1};
  top: 50%;
  left: -5%;
  height: 65%;
  width: 120%;
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  z-index: 1;
  ${t.mq.m} {
    left: -5%;
    height: 60%;
    width: 120%;
  }
  ${t.mq.l} {
    top: -10%;
    left: -10%;
    height: 120%;
    width: 45%;
  }
  ${t.mq.x} {
    width: 40%;
  }
`
export const Header = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  ${t.mq.s} {
    padding: 0 100px;
  }
  ${t.mq.l} {
    padding: 0px;
    text-align: left;
    width: 80%;
  }
  ${t.mq.x} {
    width: 65%;
  }
`
export const Title = styled.h1`
  font-size: ${t.f(6)};
  color: ${t.c.yellow};
  font-weight: 600;
  font-family: ${t.ff.sans};
  letter-spacing: 0.2rem;
  ${t.mq.l} {
    font-size: ${t.f(8)};
  }
`

export const SubTitle = styled.h2`
  font-size: ${t.f(3)};
  letter-spacing: 0.1rem;
  color: ${t.c.white};
  font-weight: 400;
  font-family: ${t.ff.sans2};
  margin: -${t.s(2)} 0 1.2rem 0;
  letter-spacing: 0.2rem;
`

export const InfoBlurb = css`
  width: 100%;
  margin-bottom: -6px;
  h3 {
<<<<<<< HEAD
    font-size: ${t.f(0)};
=======
    font-size: ${t.f(-1)};
>>>>>>> b740186a53985770f4c417a663cd7404a5285498
    color: ${t.c.yellow};
    font-family: ${t.ff.sans2};
    text-transform: uppercase;
    margin-bottom: -0.7rem;
    letter-spacing: 0.1rem;
  }

  p {
    font-family: ${t.ff.serif};
    font-size: ${t.f(0)};
    font-weight: 400;
    color: ${t.c.white};
  }
  ${t.mq.l} {
    width: 60%;
  }
  ${t.mq.x} {
    width: 50%;
  }
`

export const InfoLine = styled.hr`
  border-color: ${t.c.lightgrey};
  width: 100%;
  margin: 0;
  ${t.mq.m} {
    width: 50%;
  }
  ${t.mq.l} {
    width: 40%;
  }
  ${t.mq.x} {
    width: 30%;
  }
`
