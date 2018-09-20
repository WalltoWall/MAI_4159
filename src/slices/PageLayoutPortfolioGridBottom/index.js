import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import {
  Container,
  ImageContainer,
  StyledLink,
  GridOverlay,
  Title
} from './index.styled'

const renderGrid = data => (
  <>
  <ImageContainer>
    <Image 
      alt={data.image.alt}
      fluid={data.image.localFile.childImageSharp.fluid}
      fadeIn={false}
    />
  </ImageContainer>
  <Title>{data.title.text}</Title>
  <GridOverlay />
  </>
)

export const PageLayoutPortfolioGridBottom = ({ data }) => {
  let projects = data.items
  // disallow even number of grid items
  // let multitudeOfThree = projects.length % 3
  // if (multitudeOfThree !== 0) {
  //   projects = projects.dropRight(multitudeOfThree)
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
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 500, quality: 90) {
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
