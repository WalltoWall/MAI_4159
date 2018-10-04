import React from 'react'
import { graphql } from 'gatsby'
import { get, isString } from 'lodash'
import { Image } from 'components/Image'
import { Value } from 'react-powerplug'
import { getUnlessEmptyString } from 'helpers'
import { 
  GridContainer, 
  StyledLink, 
  ImageContainer, 
  Title, 
  OverlayContainer,
  QuoteBlock,
  Overlay,
  FilterBarContainer,
  Filter,
} from './index.styled'

const getActiveState = (currentFilter, targetFilter) => {
  if (currentFilter === "All") return true
  return currentFilter === targetFilter
}

const RoleFilterBar = ({filters, setFilter}) => (
  <FilterBarContainer>
    {filters.map((filter) => (
      <>
        <Filter
          onClick={e => setFilter(filter.role_filter)}
        >
          {filter.role_filter}
        </Filter>
      </>
    ))}
  </FilterBarContainer>
)

const renderQuoteBlock = (i) => {
  let context  
  if (i === 2 || i === 10) context = "desktop"
  if (i === 0 || i === 7) context = "mobile"
  console.log(context);
  if (isString(context)) {    
    return (
      <QuoteBlock context={context}>
        <span> {context}some quote here blah blah blah blalh</span>
      </QuoteBlock>
    )
  }  
}

const renderGrid = (data, currentFilter) => (  
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
      <Overlay isActive={getActiveState(currentFilter, data.department)}/>
    </OverlayContainer>
  </>
)

export const PageLayoutTeamGrid = ({ data, rootData }) => {
  let roleFilters = get(rootData, "prismicPage.data.role_filters")
  let teamMembers = data.items
  return (
    <Value initial="All">
      {({value: currentFilter, set: setFilter}) => (
        <>
          <RoleFilterBar 
            setFilter={setFilter} 
            filters={roleFilters}
          />
          <GridContainer>
            {teamMembers.map((member, i) => (
              <>
                <StyledLink>
                  {renderGrid(get(member, 'team_member.document[0].data'), currentFilter)}        
                </StyledLink>          
                {renderQuoteBlock(i)}          
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
