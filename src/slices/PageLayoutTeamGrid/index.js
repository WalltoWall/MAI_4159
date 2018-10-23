import React from 'react'
import { graphql } from 'gatsby'
import { get, split, trim } from 'lodash'
import { Image } from 'components/Image'
import { Value, Toggle } from 'react-powerplug'

import { getUnlessEmptyString } from 'helpers'
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
  return currentFilter === targetFilter
}

const RoleFilterBar = ({ filters, setFilter, currentFilter }) => (
  <Toggle>
    {({ toggle, on }) => (
      <>
        <FilterContainer>
          <CurrentFilter 
            onClick={() => 
            toggle()}
          >
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

const renderGrid = (data, currentFilter) => (
  <>
    <ImageContainer>
      <Image
        alt={getUnlessEmptyString(get(data, "photo.alt"))}
        fluid={get(data, "photo.localFile.childImageSharp.fluid")}
        fadeIn={false}
      />
    </ImageContainer>
    <OverlayContainer>
      <TitleContainer isActive={getActiveState(currentFilter, data.department)}>
        <Title>{data.name}</Title>
        <SubTitle>{data.affiliation}</SubTitle>
        <SubTitle>{data.job_title}</SubTitle>
      </TitleContainer>
      <Overlay isActive={getActiveState(currentFilter, data.department)} />
    </OverlayContainer>
  </>
)

export const PageLayoutTeamGrid = ({ data, rootData }) => {
  let roleFilters = split(get(data, 'primary.role_filters1'), ",")
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
                <StyledLink
                  to={get(member, 'team_member.url')}
                  onClick={e => {
                    if (
                      !getActiveState(
                        currentFilter,
                        get(member, 'team_member.document[0].data.department')
                      )
                    ) {
                      e.preventDefault()
                    }
                  }}
                >
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
        layout {
          ... on PrismicPageLayoutTeamGrid {
            id
            primary {
              role_filters1
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
                    affiliation
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
