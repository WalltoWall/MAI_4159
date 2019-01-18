import React from 'react'
import { get, trim, split, startCase, head } from 'lodash'

import { __, map } from 'lodash/fp'

import {
  DesktopContainer,
  StyledLink,
  SubFilterContainer,
  CurrentFilter,
  NavArrow,
  StyledLinkContainer,
  VerticalLine,
  NestedStyledLink,
  SubCategoryContainer,
  Filter,
} from './DesktopBar.styled'

export const DesktopBar = ({
  location,
  architectureCategories,
  historicCategories,
  filters,
  setCurrentFilter,
  currentFilter,
}) => {
  const getFilterName = path => {
    let initialLabel = split(startCase(trim(path, '/')), ' ')
    if (initialLabel.length > 1) {
      if (head(initialLabel) === 'Featured') {
        return 'Select'
      } else {
        return initialLabel.join(' ')
      }
    } else {
      return head(initialLabel)
    }
  }

  return (
    <>
      <DesktopContainer>
        <StyledLink
          to={'/featured-projects/'}
          isActive={location.pathname === '/featured-projects/'}
        >
          Featured
        </StyledLink>
        <VerticalLine>|</VerticalLine>
        <SubFilterContainer>
          <span>Architecture:</span>
          <CurrentFilter
            defaultColor={getFilterName(location.pathname) === 'Select'}
          >
            {getFilterName(location.pathname)}
          </CurrentFilter>
          <NavArrow />
          <StyledLinkContainer>
            {map(
              item => (
                <NestedStyledLink
                  key={get(item, 'name')}
                  to={get(item, 'link.url', '/')}
                >
                  {get(item, 'name')}
                </NestedStyledLink>
              ),
              architectureCategories
            )}
          </StyledLinkContainer>
        </SubFilterContainer>
        <VerticalLine>|</VerticalLine>
        <SubFilterContainer>
          <span>Historic Consulting:</span>

          <NavArrow />
          <StyledLinkContainer>
            {map(
              item => (
                <NestedStyledLink
                  key={get(item, 'name')}
                  to={get(item, 'link.url', '/')}
                >
                  {get(item, 'name')}
                </NestedStyledLink>
              ),
              historicCategories
            )}
          </StyledLinkContainer>
        </SubFilterContainer>
      </DesktopContainer>
      {filters.length >= 1 && (
        <SubCategoryContainer>
          <Filter
            onClick={e => setCurrentFilter('All')}
            isActive={currentFilter === 'All'}
          >
            All
          </Filter>
          {map(
            filter => (
              <Filter
                onClick={e => setCurrentFilter(filter['uid'])}
                isActive={currentFilter === filter['uid']}
                key={filter['uid'] + 1}
              >
                {filter['display_name']}
              </Filter>
            ),
            filters
          )}
        </SubCategoryContainer>
      )}
    </>
  )
}
