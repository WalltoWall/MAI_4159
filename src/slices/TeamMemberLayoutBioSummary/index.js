import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'

import { 
  Container, 
  ImageContainer, 
  Content, 
  SocialContainer, 
  StyledLinkedinIcon,
  StyledInstagramIcon,
  StyledTwitterIcon,
  StyledLink,
} from './index.styled'

export const renderSocial = (item) => {  
  let IconComponent 
  switch (get(item, "social_media_type")) {
    case "twitter":
      IconComponent = StyledTwitterIcon
      break;  
    case "instagram":
      IconComponent = StyledInstagramIcon
      break;
    case "linkedin":
      IconComponent = StyledLinkedinIcon
      break;
    default:
      break;
  }
  return (  
    IconComponent && (
      <StyledLink to={
        get(item, "social_media_link.url")
      }>
        <IconComponent />
      </StyledLink>    
    )
  ) 
}

export const TeamMemberLayoutBioSummary = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          alt={get(data, "primary.image.alt")}
          fluid={get(data, "primary.image.localFile.childImageSharp.fluid")}
          fadeIn={false}
        />
      </ImageContainer>
      <Content>
        <h2>{get(data, "primary.name1")}</h2>
        <h3>{get(data, "primary.position")}</h3>
        <p>{get(data, "primary.quote.text")}</p>
        <span>{get(data, "primary.email")}</span>
        <SocialContainer>
          {get(data, "items").map(item => (            
            renderSocial(item)                        
          ))}
        </SocialContainer>
      </Content>
    </Container>
  )
}

export const query = graphql`
  fragment TeamMemberLayoutBioSummary on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutBioSummary {
            id
            primary {
              name1
              position
              email
              quote {
                text
              }
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            items {
              social_media_type
              social_media_link {
                url
              }
            }            
          }
        }
      }
    }
  }
`
