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
          }
        }
      }
    `}
    render={render(props)}
  />
)}

export const CategoriesBar = (
  {
    data, 
    navigation, 
    location, 
    filters,
    setFilter,
    currentFilter 
  }) => {
  const categories = get(navigation, 'prismicNavigation.data.link_list')  
  return (      
    <>
      <DesktopBar 
        filters={filters} 
        location={location} 
        categories={categories} 
        currentFilter={currentFilter}
        setFilter={setFilter}
      />
      <MobileBar 
        location={location} 
        categories={categories} 
      />           
    </>
  )
}

const render = (props) => queryData => (
  <CategoriesBar 
    location={props.location} 
    data={props.data} 
    navigation={queryData}     
    filters={props.filters}
    setFilter={props.setFilter}
    currentFilter={props.currentFilter}
  />
)
