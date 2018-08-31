import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const Container = styled.div`
  background-color: ${t.c.lightgrey1};
  margin: 0 auto;
  display: block;
  padding: 2rem 1rem 4rem 1rem;
  ${t.mq.l} {
    min-height: 50vh;
    padding-top: 6rem;
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
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  ${t.mq.m} {
    font-size: ${t.f(5)};
    width: 100%;
    margin-top: -24px;
    z-index: 1;
  }
`

export const ImageContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Description = styled.div`
  font-family: ${t.ff.sans2};
  color: ${t.c.darkgrey1};
  line-height: ${t.lh.copy};
  font-weight: 300;
  text-align: left;
  font-size: 1rem;
`

export const CardTitle = styled.h3`
  font-family: ${t.ff.serif};
  color: ${t.c.darkgrey1};
  font-size: ${t.f(3)};
  font-weight: 400;
  text-align: left;
  margin: 0.5rem 0 0 0;

  ${t.mq.m} {
    font-size: ${t.f(3)};
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 1rem;
  justify-content: center;
`

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  background-color: white;
  margin: 1rem;
  width: ${t.s(8.5)};
  overflow: hidden;
`

export const TimeStamp = styled.div`
  text-align: left;
  font-family: ${t.ff.sans2};
  font-size: ${t.f(0)};
  color: ${t.c.darkgrey2};
`

export const Wrapper = styled.div`
  position: relative;
  display: block;
  background: ${t.c.white};
  padding: 1.5rem;
`

export const ImageWrapper = styled.div`
  height: 300px;
  display: none;
  ${t.mq.m} {
    display: block;
  }
`

export const SecondaryLink = styled(Link)`
  font-family: ${t.ff.sans2};
  font-size: ${t.f(-1)};
  color: ${t.c.darkgrey2};
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  float: left;
`



