import React from 'react'
import { Link } from 'components/Link'
import styled from 'react-emotion'
import { css } from 'emotion'
import t from 'theme'
import logo from 'assets/named_logo.svg'

export const Footer = () => (
  <Container>
    <Content>
    <LinkList>
        <Link to="/">
          <img src={logo} className={namedLogoClassName}/>
        </Link>
        <Link>
          there
        </Link>
      </LinkList>
      <LinkList>
        <Link>
          hi
        </Link>
        <Link>
          there
        </Link>
        <Link>
          I'm
        </Link>
        <Link>
          footer
        </Link>
      </LinkList>
    </Content>
  </Container>
)        

export const Container = styled.div`
  background-color: ${t.c.darkgrey1};
  padding: ${t.s(0)} * 0.9;
  position: relative;
`
export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LinkList = styled.ul`
  
`

export const namedLogoClassName = css`
  width: 40%;
  margin-top: -1.9rem;
  z-index: 3;
`