import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  ImageContainer,
  StyledLink,  
  Title,
  GridOverlay,
} from './index.styled'

const renderGrid = data => (
  <>
    <ImageContainer>
      <Image 
        alt={getUnlessEmptyString(data.image.alt)}
        fluid={data.image.localFile.childImageSharp.fluid}
        fadeIn={false}
      />
    </ImageContainer>    
    <Title>{data.title.text}</Title>
    <GridOverlay />    
  </>
)

export const PageLayoutPortfolioGridTop = ({ data }) => {
  let projects = data.items
  // disallow even number of grid items
  // if (projects.length % 2 === 1) {
  //   projects = projects.dropRight()
  // }

  return (
    <Container>
      {projects.map(item => (
        <StyledLink to={get(item, 'project.url')}>
          {renderGrid(get(item, 'project.document[0].data'))}
        </StyledLink>
      ))}
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
                    image {                
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 1000, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                          }
                        }
                      }
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
