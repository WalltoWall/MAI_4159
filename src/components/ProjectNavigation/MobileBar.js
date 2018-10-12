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

  toggleSubFilter = (e, fromParent) => {    
    e.stopPropagation()
    if (fromParent) {      
      this.setState({
        subFilterOpen: false,
      })
    } else {
      this.setState({
        subFilterOpen: !this.state.subFilterOpen,
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
          <span>Filter: </span>
          <CurrentFilter 
            onClick={e => {
              this.toggleFilter(e)
              this.toggleSubFilter(e, true)
            }}
          >
            {this.getFilterName(this.props.location.pathname)}
          </CurrentFilter>
          <NavArrow
            style={{ right: '3rem', top: '3px' }}
            active={this.state.filterOpen}
          />
        </div>
        <PrimaryFilterContainer isOpen={this.state.filterOpen}>
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
              onClick={e => this.toggleSubFilter(e, false)}
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
        </PrimaryFilterContainer>
        {this.props.filters.length > 1 && (
          <SubFilterChildContainer
            isOpen={this.state.filterOpen}
          >
              <Filter
                onClick={(e) => this.props.setFilter("All")}
                isActive={this.props.currentFilter === "All"}
              >
                All
              </Filter>          
            {this.props.filters.map((filter,index) => (          
              <Filter
                onClick={(e) => this.props.setFilter(trim(filter))}
                isActive={this.props.currentFilter === trim(filter)}
                key={index + filter}
              >
                {trim(filter)}
              </Filter>          
            ))}      
          </SubFilterChildContainer>      
        )}
      </MobileContainer>
    )
  }
}