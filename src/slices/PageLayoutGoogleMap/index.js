import React from 'react'
import { graphql } from 'gatsby'
import { GoogleMapComponent } from './GoogleMap'
import { 
  Container,
} from './index.styled'

export const PageLayoutGoogleMap = ({ data }) => {    
    return (
    <>        
        <GoogleMapComponent 
            isMarkerShown
            containerElement={<Container />}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              process.env.GATSBY_GOOGLE_API_KEY
            }`}
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
