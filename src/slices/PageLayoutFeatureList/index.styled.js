import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

const backgroundColor = ({ background_color }) => {
  switch (background_color) {
    case 'Grey':
      return `
        background-color: ${t.c.lightgrey1};
      `
    default:
      return `
        background-color: ${t.c.white};
      `
  }
}

export const Container = styled.div`
  text-align: center;
  padding: 4rem 0 6rem 0;
  ${backgroundColor};
`

export const FeatureName = styled.h2`
  font-size: ${t.s(2.5)};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  margin-top: 0;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  ${t.mq.l} {
    width: 75%;
  }
`

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: 400px;
  ${t.mq.m} {
    width: 50%;
  }
  ${t.mq.l} {
    width: 25%;
  }
`

export const Grid = styled.div`   
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 75%;
  margin: 0.5rem 1.2rem;
`
export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${t.c.white};
  opacity: 0;
  z-index: 2;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;

  ${Grid}:hover & {
    opacity: 0.8;
    border-bottom: 1rem solid ${t.c.yellow};
  }
`

export const Title = styled.div`
  position: absolute;
  opacity: 0;
  top: 45%;
  font-size: ${t.f(2)};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 600;
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  z-index: 3;
  -webkit-transition: opacity 0.2s ease-in;
  -moz-transition: opacity 0.2s ease-in;
  -o-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;

  ${t.mq.l} {
    font-size: ${t.f(3)};
  }
  ${Grid}:hover & {
    opacity: 1;
  }
`
