import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {
  Container,
  Grid,
  StyledLink,
  GridTitle,
  GridOverlay,
  Bar,
} from './index.styled'

const renderGrid = data => (
  <Grid background={data.image.url}>
    <GridTitle>{data.title.text}</GridTitle>
    <GridOverlay />
  </Grid>
)

export const PageLayoutPortfolioGridBottom = ({ data }) => {
  let projects = data.items
  // disallow even number of grid items
  let multitudeOfThree = projects.length % 3
  if (multitudeOfThree !== 0) {
    projects = projects.dropRight(multitudeOfThree)
  }

  return (
    <Container>
      <Bar>
        <span>Projects A-Z</span>
      </Bar>
      {projects.map(item => (
        <StyledLink to={get(item, 'project.url')}>
          {renderGrid(get(item, 'project.document[0].data'))}
        </StyledLink>
      ))}
    </Container>
  )
}
export const query = graphql`
  fragment PageLayoutPortfolioGridBottom on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutPortfolioGridBottom {
            id
            items {
              project {
                document {
                  data {
                    title {
                      text
                    }
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
