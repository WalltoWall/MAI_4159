import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey3};
  margin: 0 auto;
  display: block;
  padding: 2rem;
  ${t.mq.l} {
    min-height: 50vh;
    margin-top: -80px;
  }
 `

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
`

export const Headline = styled.h1`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans};
  font-size: ${t.f(4)};
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  display: block;
  z-index: 2;
  width: 100%;
  ${t.mq.l} {
    font-size: ${t.f(5)};
    margin-top: -60px;
    text-align: left;
    color: ${t.c.white};
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
`

export const Description = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto 2rem auto;
  font-family: ${t.ff.sans2};
  color: ${t.c.darkgrey1};
  font-weight: 300;
  line-height: ${t.lh.copy};
  display: none;
  ${t.mq.l} {
    font-size: ${t.f(0)};
  }
`

export const ProjectTitle = styled.h2`
  font-family: ${t.ff.sans};
  color: ${t.c.white};
  font-size: ${t.f(2.5)};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 600;
  max-width: 200px;
  display: block;
  margin: 0 auto;
  z-index: 5;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
`

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto 2rem auto;
  justify-content: space-between;
  max-width: 67rem;
`

export const Overlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 0;
  opacity: 0.4;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
`

export const Project = styled.div`
  position: relative;
  text-align: center;
  background-color: ${t.c.white};
  display: block;
  margin: 1rem 0;
  min-height: ${t.s(8)};
  min-width: ${t.s(8)};
  width: 100%;
  overflow: hidden;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  transition: all .2s ease-in;
  background-image: url(${p => p.background ? p.background : 'none'});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    width: 100%;
    height: 1rem;
    background-color: ${t.c.yellow};
    position: absolute;
    bottom: 0;
    content: '';
    display: none;
    z-index: 4;
    -webkit-transition: all .2s ease-in;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    &::after {
      display: block;
    }

    ${Image} {
      opacity: 0.2;
    }

    ${ProjectTitle} {
      color: ${t.c.darkgrey1};
    }

    ${Overlay} {
      background-color: white;
      opacity: 0.8;
    }
  }

  ${t.mq.m} {
    width: 49%;
    min-height: ${t.s(9)};
  }
`


