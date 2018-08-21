import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  background-color: ${t.c.lightgrey1};
  position: relative;
  overflow: hidden;
 `

export const Headline = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: 2px;
  margin: 0;
  width: 50%;
`

export const Image = styled.img`
  width: 50%;
  order: 2;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
`

export const Description = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  font-weight: 300;
`

export const SplitPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DescriptionWrapper = styled.div`
  width: 50%;
`