import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { get } from 'lodash'
import { Container, MobileSearchIcon, SearchButtonIcon, SearchNavItem } from './Mobile.styled'
import { MobileNavItem } from './MobileNavItem.js'
import { ModalConsumer } from 'controllers/ModalContext'
import { searchModal } from 'components/Modal/searchModal'

const renderLink = toggleMobileNav => item => (
  <MobileNavItem
    key={get(item, 'id')}
    name={get(item, 'primary.name')}
    to={get(item, 'primary.link.url')}
    toggleMobileNav={toggleMobileNav}
  />
)

const render = ({ isOpen, toggle, ...props }) => queryData => (
  <Container isOpen={isOpen} {...props}>
    {get(queryData, 'prismicNavigation.data.primary', []).map(
      renderLink(toggle)
    )}
    <SearchNavItem>      
      <MobileSearchIcon>
        <ModalConsumer>
          {({ showModal }) => (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                showModal(searchModal)
                toggle()
              }}
            > Search
              <SearchButtonIcon />
            </a>
          )}
        </ModalConsumer>
      </MobileSearchIcon>
    </SearchNavItem>
  </Container>
)

export const Mobile = props => (
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
    render={render(props)}
  />
)
