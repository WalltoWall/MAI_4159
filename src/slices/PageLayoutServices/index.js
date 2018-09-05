import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { HTMLContent } from 'components/HTMLContent'
import { 
  Container,
  Title,
  Content,
  Image,
  ContentContainer,
  ImageWrapper, 
  TextWrapper,
  Subhead,
  RelatedProjects,
} from './index.styled'

import Button from 'components/Button'

export const PageLayoutServices = ({ data }) => (
  <Container backgroundColor={get(data, 'primary.photo_orientation')}>
    <Title>{get(data, 'primary.title1.text')}</Title>
    <Content>{get(data, 'primary.text.text')}</Content>
    <ContentContainer>
      <ImageWrapper photo_orientation={get(data, 'primary.photo_orientation')}>
        <Image src={get(data, 'primary.image.url')} />
      </ImageWrapper>
      <TextWrapper>
        <Subhead>Services</Subhead>
        <HTMLContent
          html={get(data, 'primary.description.text')}
        />
      </TextWrapper>
    </ContentContainer>
    <RelatedProjects>
    </RelatedProjects>
    <Button to="/portfolio/">see more</Button>
  </Container>
)

export const query = graphql`
  fragment PageLayoutServices on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutServices {
            id
            primary {
              title1 {
                text
              }
              text {
                text
              }
              image {
                url
              }
              description {
                text
              }
              photo_orientation
            }
            items {
              related_projects {
                url
              }
            }
          }
        }
      }
    }
  }
`
