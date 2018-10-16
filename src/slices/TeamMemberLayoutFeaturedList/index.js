import React from 'react'
import { graphql } from 'gatsby'
import { ListTitle, Container, GridContainer, ImageContainer, Content } from './index.styled'
import { get, split } from 'lodash'
import { Image } from 'components/Image'
import { Link } from 'components/Link'

export const TeamMemberLayoutFeaturedList = ({ data, rootData }) => {  
  return (
    <>
    <ListTitle>
      {split(get(rootData, "prismicTeamMember.data.title"), " ")[0]}'s Featured Projects
    </ListTitle>
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
  </>
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
