import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: ${t.c.lightgrey2};
  position: relative;
  overflow: hidden;
 `

export const Headline = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  font-size: ${t.f(3)};
  margin: 0;
  width: 50%;
`

export const Image = styled.img`
  width: 55%;
  order: 2;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
`

export const Description = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  font-weight: 300;
  max-width: 450px;
  margin-top: -10px;
`

export const SplitPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`

export const DescriptionWrapper = styled.div`
  width: 45%;
  padding: 4rem;
`