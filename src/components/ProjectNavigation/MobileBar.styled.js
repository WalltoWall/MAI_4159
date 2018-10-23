import styled from 'react-emotion'
import { Link } from 'components/Link'
import { css } from 'emotion'
import t from 'theme'
import { ReactComponent as HoverArrowSVG } from 'assets/hov_arrow.svg'

export const MobileContainer = styled.div`
  background-color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  padding: ${t.s(1)} 0;
  letter-spacing: 0.05rem;
  text-align: center;
  ${t.mq.l} {
    display: none;
  }
  // position: sticky;
  // top: 0px;
  // z-index: 98;
  span {
    font-size: ${t.f(0.5)};
    color: ${t.c.lightgrey1};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`

export const PrimaryFilterContainer = styled.div`
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 0 -1.5rem 0;  
  background-color: ${t.c.lightgrey3};
`

export const CurrentFilter = styled.h2`
  font-size: ${t.f(1.5)};
  display: inline-block;
  margin: 0;
  color: ${t.c.yellow};
  text-align: center;
  cursor: pointer;
  padding-left: 10px;
`

export const StyledLink = styled(Link)`
  z-index: 2;
  padding: 0;
  margin: 0 1rem;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  color: white;
  -webkit-transition: color 0.2s ease-in;
  -moz-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
  
  &:hover {    
    ${t.mq.l} {
      color: ${t.c.yellow};
    }  
  }  
`

export const navItemClassName = css`
  display: block;
  margin: 0 2rem;
  color: ${t.c.white};
  font-size: ${t.f(1.5)};
  padding: 0.6rem 0;
  font-weight: 600;
  font-family: ${t.ff.sans2};
  letter-spacing: 0.1rem;
  cursor: pointer;
`

export const linkActiveClassName = css`
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
  top: 3px;
  right: 2rem;
`

export const SubFilterContainer = styled.div`
  display: ${p => (p.isOpen ? 'block' : 'none')};
  background-color: ${t.c.lightgrey4};
  padding: 0.5rem 0;
  width: 110%;
  margin-left: -5%;
`

export const SubFilterChildContainer = styled.div`
  background: rgb(43,43,43);
  background: linear-gradient(90deg, rgba(255,252,252,0) 90%, rgba(43,43,43,0.6292892156862745) 100%),
              linear-gradient(90deg, rgba(43,43,43,0.6292892156862745) 0%, rgba(255,252,252,0) 10%);
  position: relative;
  display: ${p => p.isOpen ? "none" : "flex"};  
  overflow-x: auto;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  background-color: ${t.c.lightgrey4};
  margin: ${t.s(1)} 0 -${t.s(1)} 0;
  
  // ::-webkit-scrollbar {
  //   width: 0px;    
  // }
    
  // ::-webkit-scrollbar-track-piece {
  //   background-color: transparent;
  //   -webkit-border-radius: 6px;
  // }    
  ${t.mq.l} {
    display: none;
  }
`

export const Filter = styled.div`
  display: inline-block;
  flex: 0 0 auto;
  color: ${p=> p.isActive ? t.c.yellow : "white"};  
  opacity: ${p=> p.isActive ? 1 : 0.7};  
  font-family: ${t.ff.sans2};
  font-size: ${t.f(1.5)};
  margin: 0;
  z-index: 3;
  padding: ${t.s(0.5)} ${t.s(0.9)};     
`
