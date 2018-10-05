import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Value, Toggle } from 'react-powerplug'
import { getUnlessEmptyString } from 'helpers'
import { QuoteBlock } from './QuoteBlock.js'
import {
  GridContainer,
  StyledLink,
  ImageContainer,
  Title,
  OverlayContainer,     
  Overlay,
  FilterBarContainer,
  CurrentFilter,
  Filter,
  NavArrow,
} from './index.styled'

const getActiveState = (currentFilter, targetFilter) => {
  if (currentFilter === 'All') return true
  return currentFilter === targetFilter
}

const RoleFilterBar = ({ filters, setFilter, currentFilter }) => (
  <Toggle>
    {({ toggle, on }) => (
      <>
        <div style={{ position: 'relative' }}>
          <CurrentFilter onClick={() => toggle()}>{currentFilter}</CurrentFilter>
          <NavArrow active={on}
          />
        </div>
        <FilterBarContainer isOpen={on}>
          {filters.map(filter => (
            <>
              <Filter
                onClick={e => {
                  setFilter(filter.role_filter)
                  toggle()
                }}
              >
                {filter.role_filter}
              </Filter>
            </>
          ))}
        </FilterBarContainer>
      </>
    )}
  </Toggle>
)

const renderGrid = (data, currentFilter, index, list) => (
  <>
    <ImageContainer>
      <Image
        alt={getUnlessEmptyString(data.photo.alt)}
        fluid={data.photo.localFile.childImageSharp.fluid}
        fadeIn={false}
      />
    </ImageContainer>
    <OverlayContainer>
      <Title>{data.name}</Title>
      <Overlay isActive={getActiveState(currentFilter, data.department)} />
    </OverlayContainer>    
  </>
)

export const PageLayoutTeamGrid = ({ data, rootData }) => {
  let roleFilters = get(rootData, 'prismicPage.data.role_filters')
  let teamMembers = data.items
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
            {teamMembers.map((member, i, list) => (
              <>
                <StyledLink>
                  {renderGrid(
                    get(member, 'team_member.document[0].data'),
                    currentFilter,
                    i,
                    list
                  )}
                </StyledLink>
                <QuoteBlock index={i} data={data} list={list} />
              </>
            ))}
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
        role_filters {
          role_filter
        }
        layout {
          ... on PrismicPageLayoutTeamGrid {
            id
            primary {
              top_quote {
                html
              }
              middle_quote {
                html
              }
              bottom_quote {
                html
              }
            }
            items {
              team_member {
                url
                document {
                  data {
                    name
                    job_title
                    department
                    photo {
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 600, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
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
    }
  }
`
