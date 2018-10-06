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
  height: ${t.s(7.5)};  
  
  ${t.mq.s} { 
    height: ${t.s(9)}; 
  }

  ${t.mq.l} {
    width: 25%;  
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
  z-index: 3;
  background-color: black; 
  opacity: ${p => p.isActive ? 0 : .5};
  cursor: ${p => p.isActive ? "pointer" : "not-allowed"};
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  transition: opacity ${t.t} ease-in-out;
  opacity: 0.8;
  padding: ${t.s(0.2)} 0;
  
  ${t.mq.l} {
    opacity: 0;
    padding: ${t.s(0)} 0;
  }
  ${StyledLink}:hover & {
    opacity: ${p => p.isActive ? 0.8 : 0};
  }
   
`
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 0.7rem;
  color: ${t.c.darkgrey1};
  padding: 0;
  margin: 0;
  ${t.mq.s} {
    font-size: ${t.f(1)};
  }
  ${t.mq.l} {
    font-size: ${t.f(1.5)};
  }
`

export const FilterBarContainer = styled.div`
  display: ${p => p.isOpen ? "flex" : "none"};
  position: sticky;
  top: 0;
  z-index: 99;
  justify-content: center;
  padding: ${t.s(1)};
  flex-direction: column;
  align-items: center;
  background-color: ${t.c.lightgrey3};
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
  font-size: ${t.f(1.5)};
  font-weight: 600;
  &:first-child {
    margin-top: 0;
  }
  cursor: pointer;
  padding: ${t.s(-2)} 0;
  ${t.mq.l} {
    padding: 0;
    margin: 0 ${t.s(1)};
  }
  transition: color ${t.t};
  :hover {
    color: ${t.c.yellow};
  }
`