import React from 'react'
import { graphql } from 'gatsby'
import { get, dropRight } from 'lodash'
import {
  Container, 
  Grid, 
  StyledLink, 
  GridTitle
} from './index.styled'

const renderGrid = (data) => (
  <Grid background={data.image.url}>
    <GridTitle>{data.title.text}</GridTitle>
  </Grid>
)

export const PageLayoutPortfolioGridTop = ({ data }) => {
    let projects = data.items  
    // disallow even number of grid items
    if ((projects.length % 2) == 1) {
      projects = projects.dropRight
    }
    
  return (
    <Container>
      {projects.map(
        (item) => (  
          <StyledLink to={(get(item, 'project.url'))}>
            {renderGrid(get(item, 'project.document[0].data'))}
          </StyledLink> 
        )  
      )}
    </Container>
    
  )
}
 export const query = graphql`
  fragment PageLayoutPortfolioGridTop on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutPortfolioGridTop {
            id
            items {
              project {
                document {
                  data {
                    title {
                      text
                    }
                    category_type
                    image {
                      url
                    }
                  }
                }
                url
              }
            }
          }
        }
      }
    }
  }
`