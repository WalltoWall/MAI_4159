import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import {
  Container,
  Grid,
  GridOverlay,
  Title,
  Content,
  StyledLink,
  Headline,
} from './index.styled'
import Button from 'components/Button'

const renderFeatureGrid = ({ alt, key, img, title, url }) => {
  console.log("xxxxxxxxxxxxxxxx", img)
 return (   
  <StyledLink to={url} key={key}>
    <Grid>
      <Image        
        fluid={img}
        alt={alt} 
        fadeIn={false}         
      />
      <Title>{title}</Title>
      <GridOverlay />
    </Grid>
  </StyledLink>  
)
 }
export const PageLayoutProjectBoxes = ({ data }) => {
  const projects = get(data, 'items')

  return (
    <Container>
    <Headline>{get(data, 'primary.title1.text')}</Headline>
      <Content>
        {projects.map(project =>
          renderFeatureGrid({
            key: get(project, 'projects.document[0].uid'),
            alt: getUnlessEmptyString(get(project, 'projects.document[0].data.image.alt')),
            img: get(project, 'projects.document[0].data.image.localFile.childImageSharp.fluid'),
            title: get(project, 'projects.document[0].data.title.text'),
            url: get(project, 'projects.url'),
          })
        )}
      </Content>
      <Button to="/all-projects/">see our work</Button>
    </Container>
  )
}

export const query = graphql`
  fragment PageLayoutProjectBoxes on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutProjectBoxes {
            id
            items {
              projects {
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
                  uid
                }
                url
              }
            }
            primary {
              title1 {
                text
              }
            }
          }
        }
      }
    }
  }
`

