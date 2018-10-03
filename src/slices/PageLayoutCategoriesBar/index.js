import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { get } from 'lodash'
import classnames from 'classnames'
import { isPathActive } from 'lib/helpers'

import {
  Desktop,
  Mobile,
  StyledLink,
  MobileFilterContainer,
  FilterContainer,
  CurrentFilter,
  navItemClassName,
  linkActiveClassName,
  NavArrow,
  StyledLinkContainer,
  VerticalLine,
  NestedStyledLink,
  SubFilterContainer,
} from './index.styled'

export class CategoriesBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      filterLabel: "",
      filterOpen: false,
      subFilterOpen: false, 
    }
  }

  

  componentDidMount () {
    if (typeof window !== 'undefined') {      
      const currentPath = window.location.pathname

  

      this.setState({
        filterLabel: currentPath,   
      })
      console.log(currentPath)
    } else {
      this.setState({
        filterLabel: "Select",   
      })
    }
  }

  updateFilterLabel = (e, name) => {
    e.stopPropagation()
    this.setState({
      filterLabel: name,
    })
  }

  toggleFilter = (e) => {
    e.stopPropagation()
    this.setState({
      filterOpen: !this.state.filterOpen
    })
  }

  toggleSubFilter = (e) => {
    e.stopPropagation()
    this.setState({
      subFilterOpen: !this.state.subFilterOpen
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
    return (
      <>
        <Desktop>
          <StyledLink 
            to={'/featured-projects/'}                 
            onClick={e => this.updateFilterLabel(e, 'Select')}
          >
            Featured</StyledLink>                   
          <VerticalLine>|</VerticalLine>
          <FilterContainer>
            <span>Building Use:</span>
            <CurrentFilter>
              {this.state.FilterLabel}
            </CurrentFilter>
            <NavArrow />
            <StyledLinkContainer>
            {categories.map(item => (
              <NestedStyledLink
                key={get(item, 'name')}
                to={get(item, 'link.url', '/')}
                onClick={e =>
                  this.updateFilterLabel(e, get(item, 'name'))
                }
              >
                {get(item, 'name')}
              </NestedStyledLink>
            ))}  
            </StyledLinkContainer>
          </FilterContainer>          
          <VerticalLine>|</VerticalLine>
          <StyledLink 
            to={'/featured-projects/'}
            onClick={e => this.updateFilterLabel(e, 'Select')}
          >
            Historical Research</StyledLink>
        </Desktop>

        <Mobile>
          <div style={{position: "relative"}}>
            <span>Filter: </span>
            <CurrentFilter 
              onClick={e => this.toggleFilter(e)}
            >
              {this.state.filterLabel}
            </CurrentFilter>
            <NavArrow style={{right: '3rem', top: '3px'}}active={this.state.filterOpen} />
          </div>
          <MobileFilterContainer isOpen={this.state.filterOpen}>
            <StyledLink 
              to={'/featured-projects/'}     
              getProps={this.getLinkProps()}            
              onClick={e => this.updateFilterLabel(e, 'Featured')}
            >
              Featured
            </StyledLink>
            <div style={{position: "relative"}}>
              <p 
                className={navItemClassName}
                style={{display: "inline-block"}}            
                onClick={e => this.toggleSubFilter(e)}
              >
                Building Use
              </p>
              <NavArrow style={{top: '12px'}}active={this.state.subFilterOpen} 
              />
            </div>
            <SubFilterContainer
              isOpen={this.state.subFilterOpen}
            >
              {categories.map(item => (
                <StyledLink
                  key={get(item, 'name')}
                  to={get(item, 'link.url', '/')}
                  getProps={this.getLinkProps()}
                  onClick={e =>
                    this.updateFilterLabel(e, get(item, 'name'))
                  }
                >
                  {get(item, 'name')}
                </StyledLink>
              ))}
            </SubFilterContainer>
            <StyledLink 
              to={'/featured-projects/'}
              getProps={this.getLinkProps()}
              onClick={e => this.updateFilterLabel(e, 'Historic Research')}
            >
              Historical Research
            </StyledLink>
          </MobileFilterContainer>
        </Mobile>        
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

