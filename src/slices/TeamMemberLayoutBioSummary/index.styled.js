import styled from 'react-emotion'
import t from 'theme'
import { ReactComponent as TwitterIcon } from 'assets/twitter_icon.svg'
import { ReactComponent as LinkedinIcon } from 'assets/linkedin_icon.svg'
import { Link } from 'components/Link'

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: ${t.s(3)} 0 ${t.s(2)} 0;
  ${t.mq.l} {
    padding: ${t.s(5)} 0 0 0;
    margin-bottom: -${t.s(2)};
  }
`

export const ImageContainer = styled.div`
  height: ${t.s(9)};

  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
  ${t.mq.m} {
    height: ${t.s(10.5)};
  }
  ${t.mq.l} {
    width: 50%;
    padding-right: ${t.s(2)};
    height: ${t.s(9.5)};
  }
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${t.mq.l} {
    width: 50%;
  }
  h2 {
    font-family: ${t.ff.sans};
    color: ${t.c.darkgrey1};
    font-size: ${t.f(4)};
    letter-spacing: ${t.ls.button};
    text-transform: uppercase;
    margin: 1rem 0 0 0;
    font-weight: 400;
    ${t.mq.l} {
      margin: 0;
    }
  }
  h3 {
    font-family: ${t.ff.sans};
    font-size: ${t.f(4)};
    letter-spacing: ${t.ls.button};
    color: ${t.c.darkgrey2};
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
  }
  p {
    font-family: ${t.ff.serif};
    color: ${t.c.darkgrey1};
    font-weight: 400;
    font-size: ${t.f(2)};
    line-height: ${t.s(2)};
    font-style: italic;
    ${t.mq.l} {
      padding: 0 ${t.s(4)} 0 0;
    }
  }
  p:last-of-type {
    font-family: ${t.ff.serif};
    color: ${t.c.darkgrey1};
    font-weight: 400;
    // text-align: right;
    font-size: ${t.f(1)};
    font-style: normal;
    line-height: ${t.s(2)};
    margin-top: -0.5rem;
    ${t.mq.l} {
      padding: 0 ${t.s(4)} 0 0;
    }
  }
  span {
    margin-top: 7px;
    font-family: ${t.ff.sans2};
    color: ${t.c.darkgrey2};
    font-size: ${t.f(1)};
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  margin-top: ${t.s(2)};
  align-items: center;
`

export const StyledLink = styled(Link)`
  display: block;
  margin-right: 1rem;
  width: 25px;
  height: 25px;
`

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  fill: ${t.c.yellow};
  transition: fill 200ms;
  :hover {
    fill: ${t.c.darkyellow};
  }
`

export const StyledTwitterIcon = styled(TwitterIcon)`
  fill: ${t.c.yellow};
  transition: fill 200ms;
  :hover {
    fill: ${t.c.darkyellow};
  }
`
