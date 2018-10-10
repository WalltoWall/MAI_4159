import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { get } from 'lodash'
import { DesktopBar } from './DesktopBar'
import { MobileBar } from './MobileBar'
import { ClipOverlay } from './MobileBar.styled.js'

export const CategoriesBar= ({data, location}) => {
  const categories = get(data, 'prismicNavigation.data.link_list')
  return (      
    <>
      <DesktopBar location={location} categories={categories}/>
      <MobileBar location={location} categories={categories} />   
      <ClipOverlay />     
    </>
  )
}

const render = (props) => queryData => (
  <CategoriesBar location={props.location} data={queryData}/>
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
    render={render(props)}
  />
)

