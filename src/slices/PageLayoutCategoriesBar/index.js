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
  NavArrow,
} from './index.styled'

export class PageLayoutCategoriesBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentFilter: "All Projects"}
  }

  updateCurrentFilter = (e, name) => {
    e.stopPropagation()
    this.setState({
      currentFilter: name
    })    
  }

  getLinkProps = () => ({ href, location: { pathname } }) => ({
    className: classnames(
      navItemClassName,
      isPathActive(pathname, href) && linkActiveClassName,
    )
  })

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
              <CurrentFilter onClick={toggle}>{this.state.currentFilter}</CurrentFilter>
              <NavArrow active={on}/>
              <FilterBox isOpen={on}>
                {categories.map(item => (
                  <StyledLink
                    key={get(item, 'name.text')}
                    to={get(item, 'url.url', '/')}
                    getProps={this.getLinkProps()}
                    onClick={(e) => this.updateCurrentFilter(e, get(item, 'name.text'))}
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