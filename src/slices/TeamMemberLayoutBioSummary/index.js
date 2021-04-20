import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { Content } from 'components/Content'
import {
  Container,
  ImageContainer,
  Column,
  SocialContainer,
  StyledLinkedinIcon,
  StyledTwitterIcon,
  StyledLink,
  StyledImage,
} from './index.styled'

export const renderSocial = item => {
  let IconComponent
  switch (get(item, 'social_media_type')) {
    case 'twitter':
      IconComponent = StyledTwitterIcon
      break
    case 'linkedin':
      IconComponent = StyledLinkedinIcon
      break
    default:
      break
  }
  return (
    IconComponent && (
      <StyledLink to={get(item, 'social_media_link.url')}>
        <IconComponent />
      </StyledLink>
    )
  )
}

export const TeamMemberLayoutBioSummary = ({ data }) => {
  const imageURL = get(data, 'primary.image.url')
  const imageFluid = get(data, 'primary.image.fluid')

  return (
    <Container>
      <Content>
        {(imageFluid || imageURL) && (
          <ImageContainer>
            <StyledImage
              alt={get(data, 'primary.image.alt')}
              src={imageURL}
              fluid={imageFluid}
            />
          </ImageContainer>
        )}
        <Column>
          <h2>{get(data, 'primary.name1')}</h2>
          <h3>{get(data, 'primary.position')}</h3>
          <p>{get(data, 'primary.quote.text')}</p>
          <p>{get(data, 'primary.quote_attribution')}</p>
          <span>{get(data, 'primary.email')}</span>
          <SocialContainer>
            {get(data, 'items').map(item => renderSocial(item))}
          </SocialContainer>
        </Column>
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
              quote_attribution
              image {
                alt
                fluid(maxWidth: 1000) {
                  ...GatsbyPrismicImageFluid_noBase64
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
