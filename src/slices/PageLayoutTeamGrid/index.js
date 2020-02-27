import React from 'react'
import { graphql } from 'gatsby'
import { get, split, trim, includes, toLower, filter } from 'lodash'
import { Image } from 'components/Image'
import { Value, Toggle } from 'react-powerplug'

import { getUnlessEmpty } from 'helpers'
import { QuoteBlock } from './QuoteBlock.js'
import {
  GridContainer,
  StyledLink,
  ImageContainer,
  TitleContainer,
  Title,
  SubTitle,
  OverlayContainer,
  Overlay,
  FilterBarContainer,
  CurrentFilter,
  Filter,
  NavArrow,
  FilterContainer,
} from './index.styled'

const getActiveState = (currentFilter, targetFilter) => {
  if (currentFilter === 'All') return true
  const target = targetFilter || ''
  const sanitizedCurrentFilter = toLower(trim(currentFilter))
  const sanitizedTargetFilter = target
    .split(',')
    .map(filter => toLower(trim(filter)))
  if (includes(sanitizedTargetFilter, sanitizedCurrentFilter)) return true
}

const RoleFilterBar = ({ filters, setFilter, currentFilter }) => (
  <Toggle>
    {({ toggle, on }) => (
      <>
        <FilterContainer>
          <CurrentFilter onClick={() => toggle()}>
            <span>View: </span>
            {currentFilter}
            <NavArrow active={on} />
          </CurrentFilter>
        </FilterContainer>
        <FilterBarContainer isOpen={on}>
          {filters.map(filter => (
            <>
              <Filter
                onClick={e => {
                  setFilter(trim(filter))
                  toggle()
                }}
                isActive={currentFilter === trim(filter)}
              >
                {trim(filter)}
              </Filter>
            </>
          ))}
        </FilterBarContainer>
      </>
    )}
  </Toggle>
)

const renderGrid = (data, currentFilter) => {
  const imageFluid = get(data, 'photo.localFile.childImageSharp.fluid')
  const imageURL = get(data, 'photo.url')

  return (
    <>
      {(imageFluid || imageURL) && (
        <ImageContainer>
          <Image
            alt={getUnlessEmpty('photo.alt', data)}
            fluid={imageFluid}
            src={imageURL}
          />
        </ImageContainer>
      )}
      <OverlayContainer>
        <TitleContainer
          isActive={getActiveState(currentFilter, get(data, 'department1'))}
        >
          <Title>{get(data, 'name')}</Title>
          <SubTitle>{get(data, 'affiliation')}</SubTitle>
          <SubTitle>{get(data, 'job_title')}</SubTitle>
        </TitleContainer>
        <Overlay
          isActive={getActiveState(currentFilter, get(data, 'department1'))}
        />
      </OverlayContainer>
    </>
  )
}

export const PageLayoutTeamGrid = ({ data, rootData }) => {
  let roleFilters = split(get(data, 'primary.role_filters1'), ',')

  const items = data.items

  return (
    <Value initial="All">
      {({ value: currentFilter, set: setFilter }) => (
        <>
          <RoleFilterBar
            setFilter={setFilter}
            filters={roleFilters}
            currentFilter={currentFilter}
          />
          <GridContainer>
            {items.map((item, i, list) => {
              if (item.item.document.__typename === 'PrismicTeamMember') {
                return (
                  <>
                    <StyledLink
                      to={get(item, 'item.url')}
                      onClick={e => {
                        if (
                          !getActiveState(
                            currentFilter,
                            get(item, 'item.document.data.department1')
                          )
                        ) {
                          e.preventDefault()
                        }
                      }}
                    >
                      {renderGrid(
                        get(item, 'item.document.data'),
                        currentFilter,
                        i,
                        list
                      )}
                    </StyledLink>
                  </>
                )
              }

              if (item.item.document.__typename === 'PrismicQuoteBlock') {
                const quoteData = item.item.document.data
                return <QuoteBlock data={quoteData} />
              }
            })}
          </GridContainer>
        </>
      )}
    </Value>
  )
}

export const query = graphql`
  fragment PageLayoutTeamGrid on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutTeamGrid {
            id
            primary {
              role_filters1
            }
            items {
              item {
                url
                document {
                  ... on PrismicTeamMember {
                    data {
                      name
                      affiliation
                      job_title
                      department1
                      photo {
                        alt
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 600, quality: 90) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                          }
                        }
                      }
                    }
                  }
                  ... on PrismicQuoteBlock {
                    data {
                      display
                      angle
                      text1 {
                        html
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
