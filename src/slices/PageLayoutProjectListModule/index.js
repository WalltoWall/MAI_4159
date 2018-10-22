import React from 'react'
import { graphql } from 'gatsby'
import { get, split } from 'lodash'
import { ProjectNavigation } from 'components/ProjectNavigation'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import { Value } from 'react-powerplug'
import {
  Container,
  ImageContainer,
  StyledLink,
  Title,
  OverlayContainer,
} from './index.styled'

const renderGrid = data => (
  <>
    <ImageContainer>
      <Image
        alt={getUnlessEmptyString(data.image.alt)}
        fluid={get(data, "image.localFile.childImageSharp.fluid")}
        fadeIn={false}
      />
    </ImageContainer>
    <OverlayContainer>
      <Title>{data.title.text}</Title>
    </OverlayContainer>
  </>
)

export const PortfolioGrid = ({ data, currentFilter }) => {
  let projects = data.items
  return (
    <Container>
      {projects.map((item, index) => (
        <StyledLink 
          key={get(item, 'project.url') + index}
          to={get(item, 'project.url')}
          twoInRow={
            (get(item, 'position') === "Top") ||
            (currentFilter !== "All")
          }          
          show={
            (currentFilter === get(item, 'project.document[0].data.sub_category')) ||
            (currentFilter === "All")            
          }
        >
          {renderGrid(get(item, 'project.document[0].data'))}
        </StyledLink>
      ))}
    </Container>
  )
}

export const PageLayoutProjectListModule = ({data, location}) => {
  let filters = get(data, "primary.category_filters.text")
  filters = split(filters, ",")
  return(
    <Value initial="All">
      {({ value: currentFilter, set: setFilter }) => (
        <>
          <ProjectNavigation 
            location={location}
            filters={filters}
            setFilter={setFilter} 
            currentFilter={currentFilter}
          />
          <PortfolioGrid 
            data={data} 
            setFilter={setFilter} 
            currentFilter={currentFilter}               
          />            
        </>
      )}
    </Value>
  )
}       
    
export const query = graphql`
  fragment PageLayoutProjectListModule on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutProjectListModule {
            id   
            primary {
              category_filters {
                text
              }
            }  
            items {
              position
              project {
                url
                document {
                  data {
                    title {
                      text
                    }
                    project_type {
                      text
                    }                    
                    sub_category
                    image {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 800, quality: 90) {
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
