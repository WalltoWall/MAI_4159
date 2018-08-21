import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.lightgrey2};
  margin: 0 auto;
  display: block;
  min-height: 10vh;
  padding: ${t.s(0)};
  ${t.mq.l} {
    min-height: 50vh;
  }
 `

export const Text = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  font-size: 1rem;
`

export const Headline = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
`


export const Image = styled.img`
  display: block;
  width: 600px;
  height: 450px;
  margin: 2rem;
  transition: all 2ms;

  &:hover {
    opacity: 0.5;
  }
`

export const Description = styled.div`
  text-align: center;
  width: 500px;
  margin: 2rem auto;
  font-family: ${t.ff.sans2};
  font-weight: 300;
`

export const Project = styled.div``

export const BoxBody = styled.div``

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`