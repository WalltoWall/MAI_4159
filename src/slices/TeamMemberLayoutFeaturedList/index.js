import React from 'react'
import { graphql } from 'gatsby'
import { Container, GridContainer, ImageContainer, Content } from './index.styled'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Link } from 'components/Link'

export const TeamMemberLayoutFeaturedList = ({ data }) => {
  console.log("sss", data)
  return (
  <Container>
    {get(data, "items").map(item => (
      <GridContainer>
        <Link
         to={get(item, "project.url")}
        >
          <ImageContainer>
            <Image 
              fluid={get(item, "project.document[0].data.image.localFile.childImageSharp.fluid")}
            />          
          </ImageContainer> 
        </Link>
        <Content>
          <h2>
            {get(item, "project.document[0].data.title.text")}  
          </h2>          
          <hr align="left"/>
          <div>
            <span>Project Type</span>
            <p>{get(item, "project.document[0].data.project_type.text")}</p>
          </div>
          <hr align="left"/>
          <div>
            <span>Year Completed</span>
            <p>{get(item, "project.document[0].data.year_completed")}</p>
          </div>
        </Content>
      </GridContainer>      
      
    ))}    
  </Container>
  )
}
export const query = graphql`
  fragment TeamMemberLayoutFeaturedList on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutFeaturedList {
            id
            items {
              project {
                url
                document {
                  data {
                    title {
                      text
                    }
                    project_type {
                      text
                    }
                    year_completed          
                    image {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 800, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                          }
                        }
                      }
                    }
                  }
                }
              }
            }       
          }
        }
      }
    }
  }
`
