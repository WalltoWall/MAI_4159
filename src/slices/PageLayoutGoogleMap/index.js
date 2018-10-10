import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { GoogleMapComponent } from './GoogleMap'
import { 
  Container,
} from './index.styled'

export const PageLayoutGoogleMap = ({ data }) => {
    console.log("map api  ", process.env.GATSBY_GOOGLE_API_KEY)
    return (
    <>        
        <GoogleMapComponent 
            isMarkerShown
            containerElement={<Container />}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3&key=${process.env.GATSBY_GOOGLE_API_KEY}&libraries=geometry`}
            loadingElement={<div style={{ height: `100%` }} />}            
            mapElement={<div style={{ height: `100%` }} />}
        />
    </>
)}

export const query = graphql`
  fragment PageLayoutGoogleMap on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutGoogleMap {
            id  
            primary {
                show_map
            }          
          }
        }
      }
    }
  }
`
