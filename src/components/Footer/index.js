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
  CopyrightContent,
} from './index.styled'

const render = () => queryData => {
  const menuList = get(queryData, 'prismicNavigation.data.primary')
  const menuLength = menuList.length

  return (
    <Container>
      <Content>
        <Link to="/">
          <FooterLogo src={logo} />
        </Link>
        <BrandContent>
        </BrandContent>
        <MenuContainer>
          <LinkContainer>
            {menuList.map((item, index) => (
              <React.Fragment key={index + get(item, 'id')}>
                <StyledLink
                  key={get(item, 'id')}
                  to={get(item, 'primary.link.url', '/')}
                >
                  {get(item, 'primary.name')}
                </StyledLink>
                {menuLength !== index + 1 && (
                  <LinkSeparator 
                    key={get(item, 'id') + index}
                    index={index}>
                    |
                  </LinkSeparator>
                )}
              </React.Fragment>
            ))}
          </LinkContainer>
          <CopyrightContent>
            © 2018 Mason<br/>Website designed and developed by <a href="https://www.walltowall.com" target="blank">Wall-to-Wall Studios</a>.
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
