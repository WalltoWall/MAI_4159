import React from 'react'
import { get, trim, split, startCase, dropRight, head } from 'lodash'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'
import {
  MobileContainer,
  StyledLink,
  MobileFilterContainer,
  CurrentFilter,
  navItemClassName,
  linkActiveClassName,
  NavArrow,
  SubFilterContainer,
} from './MobileBar.styled'

export class MobileBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterOpen: false,
      subFilterOpen: false,
    }
  }
  getFilterName(path) {
    let initialLabel = split(startCase(trim(path, '/')), ' ')
    if (initialLabel.length > 1) {
      return head(dropRight(initialLabel))
    } else {
      return head(initialLabel)
    }
  }
  closeAllFilters = e => {
    this.toggleFilter(e)
    this.toggleSubFilter(e)
  }

  toggleFilter = e => {
    e.stopPropagation()
    this.setState({
      filterOpen: !this.state.filterOpen,
    })
  }

  toggleSubFilter = e => {
    e.stopPropagation()
    this.setState({
      subFilterOpen: !this.state.subFilterOpen,
    })
  }

  getLinkProps = () => ({ href, location: { pathname } }) => ({
    className: classnames(
      navItemClassName,
      isPathActive(pathname, href) && linkActiveClassName
    ),
  })

  render() {
    return (
      <MobileContainer>
        <div style={{ position: 'relative' }}>
          <span>Filter: </span>
          <CurrentFilter onClick={e => this.toggleFilter(e)}>
            {this.getFilterName(this.props.location.pathname)}
          </CurrentFilter>
          <NavArrow
            style={{ right: '3rem', top: '3px' }}
            active={this.state.filterOpen}
          />
        </div>
        <MobileFilterContainer isOpen={this.state.filterOpen}>
          <StyledLink
            to={'/featured-projects/'}
            getProps={this.getLinkProps()}
            onClick={e => this.toggleFilter(e)}
          >
            Featured
          </StyledLink>
          <div style={{ position: 'relative' }}>
            <p
              className={navItemClassName}
              style={{ display: 'inline-block' }}
              onClick={e => this.toggleSubFilter(e)}
            >
              Building Use
            </p>
            <NavArrow
              style={{ top: '12px', right: '2rem' }}
              active={this.state.subFilterOpen}
            />
          </div>
          <SubFilterContainer isOpen={this.state.subFilterOpen}>
            {this.props.categories.map(item => (
              <StyledLink
                key={get(item, 'name')}
                to={get(item, 'link.url', '/')}
                getProps={this.getLinkProps()}
                onClick={e => this.closeAllFilters(e)}
              >
                {get(item, 'name')}
              </StyledLink>
            ))}
          </SubFilterContainer>
          <StyledLink
            to={'/featured-projects/'}
            getProps={this.getLinkProps()}
            onClick={e => this.toggleFilter(e)}
          >
            Historical Research
          </StyledLink>
        </MobileFilterContainer>
      </MobileContainer>
    )
  }
}
