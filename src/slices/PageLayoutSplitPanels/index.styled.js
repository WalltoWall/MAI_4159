import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 4rem auto;
  background-color: ${t.c.lightgrey2};
  position: relative;
  overflow: hidden;
 `

export const Headline = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.serif};
  font-size: 2rem;
  margin: 0;
  width: 50%;
`

export const Image = styled.img`
  width: 60%;
  order: 2;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
`

export const Description = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  font-weight: 300;
  max-width: 500px;
`

export const SplitPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`

export const DescriptionWrapper = styled.div`
  width: 40%;
  padding: 4rem;
`