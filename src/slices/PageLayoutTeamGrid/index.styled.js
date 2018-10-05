import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const GridContainer = styled.div`
  display: flex; 
  align-items: center;
  flex-wrap: wrap;  
  overflow: hidden;
`

export const StyledLink = styled(Link)`  
  display: flex;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 200px; 
  overflow: hidden;    
  
  ${t.mq.l} {
    width: 25%;
    height: 300px; 
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const OverlayContainer = styled.div`
  display: flex;  
  position: absolute;
  width: 100%;
  height: 100%;    
  justify-content: center;
  align-items: flex-end;
  bottom: 0; 
  color: yellow;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black; 
  opacity: ${p => p.isActive ? 0 : .8};
`

export const Title = styled.h1`
  
`

export const FilterBarContainer = styled.div`
  display: ${p => p.isOpen ? "flex" : "none"};
  justify-content: center;
  padding: ${t.s(1)};
  flex-direction: column;
  align-items: center;
  background-color: ${t.c.darkgrey2};
  color: white;
  ${t.mq.l} {
    display: flex;
    flex-direction: row;
  }
`

export const CurrentFilter = styled.div`
  cursor: pointer; 
  ${t.mq.l} {
    display: none;
  }
  background-color: ${t.c.darkgrey2};
  font-size: ${t.f(2)};
  font-weight: 700;
  text-align: center;
  padding: ${t.s(1)} 0;
  color: ${t.c.yellow};
`
export const NavArrow = styled(HoverArrowSVG)`
  flex-shrink: 0;
  height: 1.2rem;
  transform: ${p => (p.active ? 'rotate(90deg)' : 'rotate(0deg)')};
  position: absolute;
  z-index: 1;
  display: inline-block;
  margin-left: 10px;  
  right: 4rem;
  top: 26px;
  ${t.mq.l} {
    display: none;
  }
`

export const Filter = styled.div`
  font-size: ${t.f(2)};
  margin: 0 ${t.s(1)};
  cursor: pointer;
`