import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { get } from 'lodash'
import { DesktopBar } from './DesktopBar'
import { MobileBar } from './MobileBar'

export const ProjectNavigation = props => {  
  return(
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
            link_list1 {              
              name
              link {
                url
              }              
            }
          }
        }
      }
    `}
    render={render(props)}
  />
)}

export const CategoriesBar = (
  {    
    navigation, 
    location, 
    filters,
    setCurrentFilter,
    currentFilter, 
  }) => {
  const architectureCategories = get(navigation, 'prismicNavigation.data.link_list')  
  const historicCategories = get(navigation, 'prismicNavigation.data.link_list1')  
  return (      
    <>
      <DesktopBar 
        filters={filters} 
        location={location} 
        architectureCategories={architectureCategories}    
        historicCategories={historicCategories}     
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />
      <MobileBar 
        location={location} 
        architectureCategories={architectureCategories} 
        historicCategories={historicCategories}
        filters={filters}         
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />           
    </>
  )
}

const render = (props) => queryData => (
  <CategoriesBar 
    location={props.location}     
    navigation={queryData}     
    filters={props.filters}
    setCurrentFilter={props.setCurrentFilter}
    currentFilter={props.currentFilter}
  />
)
