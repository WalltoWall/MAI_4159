import styled from 'react-emotion'
import { Link } from 'components/Link'
import t from 'theme'

export const Container = styled.div`
  background-color: ${t.c.darkgrey1};
  height: 100%;
  padding: ${t.s(2.5)} 0 ${t.s(0.5)} 0;
  position: relative;
`
export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${t.mq.l} {
    flex-direction: row;
  }
`
export const FooterLogo = styled.img`
  margin-top: -${t.s(3.8)};
  z-index: 3;
  width: 80px;
`
export const BrandContent = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  width: 70%;
  padding: 1rem 0;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  ${t.mq.l} {
    padding: 0 5rem 0 2.5rem;
    width: 40%;
    text-align: left;
    margin-top: -1.2rem;
  }
`
export const MenuContainer = styled.div`
  color: ${t.c.lightgrey2};
  font-weight: 500;
  text-align: center;
  ${t.mq.l} {
    margin-top: -1.2rem;
    text-align: left;
  }
`
export const LinkContainer = styled.div`
  padding: 1rem 2.5rem;
  background-color: #00000061;
  ${t.mq.l} {
    padding: inherit;
    background: none;
  }
`
export const StyledLink = styled(Link)`
  display: inline-block;
  line-height: 2rem;
  font-family: ${t.ff.sans2};
  ${t.mq.l} {
    line-height: inherit;
    display: inline;
  }
`
export const LinkSeparator = styled.span`  
  color: ${t.c.yellow};
  padding: 0 ${t.s(0)};
  
  ${t.mq.t} {
    display: ${p => p.index === 2 ? "none" : "inline"};
  }
  ${t.mq.s} {
    display: inline;
  }
`
export const CopyrightContent = styled.div`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
  padding: 1rem 3rem 0 3rem;
  font-size: ${t.s(-1)};
  font-weight: 400;
  ${t.mq.l} {
    font-size: ${t.s(-0.5)};
    padding: 0.4rem 0 0 0;
  }
`
