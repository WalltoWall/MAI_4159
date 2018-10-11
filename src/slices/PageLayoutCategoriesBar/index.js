import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { get } from 'lodash'
import { DesktopBar } from './DesktopBar'
import { MobileBar } from './MobileBar'

export const PageLayoutCategoriesBar = props => {  
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

export const CategoriesBar= ({data, navigation, location, filters}) => {
  const categories = get(navigation, 'prismicNavigation.data.link_list')
  const subTypes = get(data, "items")
  return (      
    <>
      <DesktopBar location={location} categories={categories} subTypes={subTypes} />
      <MobileBar location={location} categories={categories} />           
    </>
  )
}

const render = (props) => queryData => (
  <CategoriesBar 
    location={props.location} 
    data={props.data} 
    navigation={queryData}     
  />
)

export const query = graphql`
  fragment PageLayoutCategoriesBar on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCategoriesBar {
            id            
            items {
              filter_name
            }
          }
        }
      }
    }
  }
`