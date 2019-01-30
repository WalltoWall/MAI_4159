import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {
  compose,
  reject,
  flattenDeep,
  uniqBy,
  size,
  path,
  map,
} from 'lodash/fp'

import { ProjectNavigation } from 'components/ProjectNavigation'
import { Image } from 'components/Image'
import { getUnlessEmpty } from 'helpers'
import { Value } from 'react-powerplug'
import {
  Container,
  ImageContainer,
  StyledLink,
  Title,
  OverlayContainer,
} from './index.styled'

const filtersMatch = (currentFilter, projectFilters) => {
  let filterMatched = false
  map(filter => {
    if (currentFilter === path('project_subcategory.document[0].uid', filter)) {
      filterMatched = true
    }
  }, projectFilters)
  return filterMatched
}

const renderGrid = (data, item, currentFilter) => {
  return (
    <>
      <ImageContainer>
        <Image
          alt={getUnlessEmpty('data.project_thumb_image.alt', data)}
          fluid={get(
            data,
            'project_thumb_image.localFile.childImageSharp.fluid'
          )}
          fadeIn={false}
        />
      </ImageContainer>
      <OverlayContainer
        longText={size(get(data, 'title.text')) >= 23}
        bottom={get(item, 'position') === 'Bottom' || currentFilter !== 'All'}
      >
        <Title
          bottom={get(item, 'position') === 'Bottom' || currentFilter !== 'All'}
        >
          {get(data, 'title.text')}
        </Title>
      </OverlayContainer>
    </>
  )
}

export const PortfolioGrid = ({ data, currentFilter }) => {
  let projects = data.items
  return (
    <Container>
      {map(
        (item, index) => (
          <StyledLink
            key={get(item, 'project.url') + index}
            to={get(item, 'project.url')}
            twoInRow={
              get(item, 'position') === 'Top' || currentFilter !== 'All'
            }
            show={
              filtersMatch(
                currentFilter,
                get(item, 'project.document[0].data.subcategory')
              ) || currentFilter === 'All'
            }
          >
            {renderGrid(
              get(item, 'project.document[0].data'),
              item,
              currentFilter
            )}
          </StyledLink>
        ),
        projects
      )}
    </Container>
  )
}

export const PageLayoutProjectListModule = ({ data, rootData, location }) => {
  const getSubCategories = rootaData => {
    const parentUID = path('prismicPage.uid', rootData)

    let subcategories = compose(
      uniqBy('display_name'),
      map(item => ({
        uid: path('uid', item),
        display_name: path('data.display_name', item),
      })),
      reject(
        item =>
          path('data.parent_category_page.document[0].uid', item) !== parentUID
      ),
      map('project_subcategory.document[0]'),
      flattenDeep,
      map('subcategory'),
      map('project.document[0].data'),
      path('items')
    )(data)
    return subcategories
  }

  return (
    <Value initial="All">
      {({ value: currentFilter, set: setCurrentFilter }) => (
        <>
          <ProjectNavigation
            location={location}
            filters={getSubCategories(rootData)}
            setCurrentFilter={setCurrentFilter}
            currentFilter={currentFilter}
          />
          <PortfolioGrid
            data={data}
            setCurrentFilter={setCurrentFilter}
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
            items {
              position
              project {
                url
                document {
                  data {
                    title {
                      text
                    }
                    subcategory {
                      project_subcategory {
                        document {
                          uid
                          data {
                            title {
                              text
                            }
                            display_name
                            parent_category_page {
                              document {
                                uid
                              }
                            }
                          }
                        }
                      }
                    }
                    project_thumb_image {
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
