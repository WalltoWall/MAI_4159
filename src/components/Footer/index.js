import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'components/Link'
import logo from 'assets/named_logo.svg'
import { get } from 'lodash'
import {
  Container,
  Content,
  FooterLogo,
  BrandContent,
  MenuContainer,
  LinkContainer,
  StyledLink,
  LinkSeparator,
  CopyrightContent
} from './index.styled'

const render = () => queryData => {
  const menuList = get(queryData, 'prismicNavigation.data.primary');
  const menuLength = menuList.length;

  return (
    <Container>
      <Content>
        <Link to="/">
          <FooterLogo src={logo} />
        </Link>
        <BrandContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </BrandContent>
        <MenuContainer>
          <LinkContainer>
            {menuList.map(
              (item, index) => (
              <>
                <StyledLink
                  key={get(item, 'id')}
                  to={get(item, 'primary.link.url', '/')} 
                >
                  {get(item, 'primary.name')}
                </StyledLink>
                {
                  menuLength !== (index + 1) && 
                  <LinkSeparator>|</LinkSeparator>
                }
              </>
              )
            )}
          </LinkContainer>
          <CopyrightContent>
            © 2074 Sed ut porttitor purus. Quisque ligula lectus. Proin vitae diam ipsum.
          </CopyrightContent>
          </MenuContainer>
      </Content>
    </Container>
  )
}

export const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        prismicNavigation {
          data {
            primary {
              id
              primary {
                name
                link {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={render()}
  />
)


