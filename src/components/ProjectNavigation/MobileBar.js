import React from 'react'
import { get, trim, split, startCase, dropRight, head } from 'lodash'
import classnames from 'classnames'

import { isPathActive } from 'lib/helpers'
import {
  MobileContainer,
  StyledLink,
  PrimaryFilterContainer,
  CurrentFilter,
  navItemClassName,
  linkActiveClassName,
  NavArrow,
  SubFilterContainer,
  SubFilterChildContainer,
  Filter,
} from './MobileBar.styled'

export class MobileBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterOpen: null,
      activeSubFilter: null,
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

  toggleSubFilter = (e, fromParent, target) => {
    e.stopPropagation()
    if (fromParent) {
      this.setState({
        activeSubFilter: null,
      })
    } else {
      this.setState({
        activeSubFilter: this.state.activeSubFilter === target ? null : target,
      })
    }
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
          <span>View By: </span>
          <CurrentFilter
            onClick={e => {
              this.toggleFilter(e)
              this.toggleSubFilter(e, true)
            }}
          >
            {this.getFilterName(this.props.location.pathname)}
            <NavArrow
              style={{ right: '3rem', top: '3px' }}
              active={this.state.filterOpen}
            />
          </CurrentFilter>
        </div>
        <PrimaryFilterContainer isOpen={this.state.filterOpen}>
          <StyledLink
            to={'/featured-projects/'}
            getProps={this.getLinkProps()}
            onClick={e => this.toggleFilter(e)}
          >
            Featured
          </StyledLink>
          {/* ARCH SUB FILTER START */}
          <div style={{ position: 'relative' }}>
            <p
              className={navItemClassName}
              style={{ display: 'inline-flex' }}
              onClick={e => this.toggleSubFilter(e, false, 'arch')}
            >
              Architecture
              <NavArrow
                style={{ top: '12px', right: '2rem' }}
                active={this.state.activeSubFilter === 'arch'}
              />
            </p>
          </div>
          <SubFilterContainer isOpen={this.state.activeSubFilter === 'arch'}>
            {this.props.architectureCategories.map(item => (
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
          {/* ARCH SUB FILTER END */}

          {/* HISTORIC SUB FILTER START */}
          <div style={{ position: 'relative' }}>
            <p
              className={navItemClassName}
              style={{ display: 'inline-flex' }}
              onClick={e => this.toggleSubFilter(e, false, 'hist')}
            >
              Historic Consulting
              <NavArrow
                style={{ top: '12px', right: '2rem' }}
                active={this.state.activeSubFilter === 'hist'}
              />
            </p>
          </div>
          <SubFilterContainer isOpen={this.state.activeSubFilter === 'hist'}>
            {this.props.historicCategories.map(item => (
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
          {/* HISTORIC SUB FILTER END */}
        </PrimaryFilterContainer>
        {this.props.filters.length > 1 && (
          <SubFilterChildContainer isOpen={this.state.filterOpen}>
            <Filter
              onClick={e => this.props.setCurrentFilter('All')}
              isActive={this.props.currentFilter === 'All'}
            >
              All
            </Filter>
            {this.props.filters.map((filter, index) => (
              <Filter
                onClick={e => this.props.setCurrentFilter(filter['uid'])}
                isActive={this.props.currentFilter === filter['uid']}
                key={index + filter['uid']}
              >
                {filter['display_name']}
              </Filter>
            ))}
          </SubFilterChildContainer>
        )}
      </MobileContainer>
    )
  }
}
