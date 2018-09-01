import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'

import { Toggle } from 'react-powerplug'
import {
  Desktop,
  Mobile,
  StyledLink,
  FilterBox,
  CurrentFilter,
  navItemClassName,
  linkActiveClassName,
} from './index.styled'

export class PageLayoutCategoriesBar extends React.Component {
  getLinkProps = () => ({ href, location: { pathname } }) => ({
    className: classnames(
      navItemClassName,
      isPathActive(pathname, href) && linkActiveClassName,
    ),
  })

  componentDidMount() {}

  render() {
    const categories = get(this.props, 'data.items')
    return (
      <>
        <Desktop>
          {categories.map(item => (
            <StyledLink
              key={get(item, 'name.text')}
              to={get(item, 'url1.url', '/')}
            >
              {get(item, 'name.text')}
            </StyledLink>
          ))}
        </Desktop>
        <Toggle>
          {({ on, toggle }) => (
            <Mobile>
              <span>Filter: </span>
              <CurrentFilter onClick={toggle}>active filter name</CurrentFilter>
              <FilterBox isOpen={on}>
                {categories.map(item => (
                  <StyledLink
                    key={get(item, 'name.text')}
                    to={get(item, 'url.url', '/')}
                    getProps={this.getLinkProps()}
                  >
                    {get(item, 'name.text')}
                  </StyledLink>
                ))}
              </FilterBox>
            </Mobile>
          )}
        </Toggle>
      </>
    )
  }
}

export const query = graphql`
  fragment PageLayoutCategoriesBar on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCategoriesBar {
            id
            items {
              name {
                text
              }
              url1 {
                url
              }
            }
          }
        }
      }
    }
  }
`