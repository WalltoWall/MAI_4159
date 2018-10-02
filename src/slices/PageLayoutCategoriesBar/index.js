import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
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
import { PageLayoutAnchor } from 'slices/PageLayoutAnchor'

export class CategoriesBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentFilter: 'Select Filter' }
  }

  updateCurrentFilter = (e, name) => {
    e.stopPropagation()
    this.setState({
      currentFilter: name,
    })
  }

  getLinkProps = () => ({ href, location: { pathname } }) => ({
    className: classnames(
      navItemClassName,
      isPathActive(pathname, href) && linkActiveClassName
    ),
  })

  render() {
    const categories = get(this.props, 'data.prismicNavigation.data.link_list')
    console.log("im catgeoriewasdf ", categories)
    return (
      <>



        <Desktop>
          {categories.map(item => (
            <StyledLink
              key={get(item, 'name')}
              to={get(item, 'link.url', '/')}
            >
              {get(item, 'name')}
            </StyledLink>
          ))}
        </Desktop>






        <Toggle>
          {({ on, toggle }) => (
            <Mobile>
              <span>Filter: </span>
              <CurrentFilter onClick={toggle}>
                {this.state.currentFilter}
              </CurrentFilter>
              <NavArrow active={on} />
              <FilterBox isOpen={on}>
                {categories.map(item => (
                  <StyledLink
                    key={get(item, 'name')}
                    to={get(item, 'link.url', '/')}
                    getProps={this.getLinkProps()}
                    onClick={e =>
                      this.updateCurrentFilter(e, get(item, 'name'))
                    }
                  >
                    {get(item, 'name')}
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

const render = () => queryData => (
  <CategoriesBar data={queryData}/>
)


export const PageLayoutCategoriesBar = props => (
  <StaticQuery
    query={graphql`
      query {
        prismicNavigation {
          data {
            link_list {              
              name
              link {
                url
              }              
            }
          }
        }
      }
    `}
    render={render()}
  />
)

