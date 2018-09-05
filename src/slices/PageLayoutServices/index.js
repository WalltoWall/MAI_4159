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
  StyledHtmlClassName,
  Grid,
  GridOverlay,
  StyledLink,
  ProjectTitle,
  Subtitle,
} from './index.styled'

import Button from 'components/Button'

export const PageLayoutServices = ({ data }) => {
  const projects = get(data, 'items')

  return (
    <Container photo_orientation={get(data, 'primary.photo_orientation')}>
      <Title>{get(data, 'primary.title1.text')}</Title>
      <Content>{get(data, 'primary.text.text')}</Content>
      <ContentContainer>
        <ImageWrapper photo_orientation={get(data, 'primary.photo_orientation')}>
          <Image src={get(data, 'primary.image.url')} />
        </ImageWrapper>
        <TextWrapper>
          <Subhead>Services</Subhead>
          <HTMLContent
            html={get(data, 'primary.description.html')}
            className={StyledHtmlClassName}
          />
        </TextWrapper>
      </ContentContainer>
      <Subtitle>Related projects</Subtitle>
      <RelatedProjects>
          {projects.map(project =>
            renderFeatureGrid({
              key: get(project, 'related_projects.document[0].uid'),
              img: get(project, 'related_projects.document[0].data.image.url'),
              title: get(project, 'related_projects.document[0].data.title.text'),
              url: get(project, 'related_projects.url'),
            })
          )}
      </RelatedProjects>
      <Button to="/portfolio/">see more</Button>
    </Container>
  )
}

const renderFeatureGrid = ({ key, img, title, url }) => (
    <StyledLink to={url} key={key}>
      <Grid url={img}>
        <ProjectTitle>{title}</ProjectTitle>
        <GridOverlay />
      </Grid>
    </StyledLink>
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
                html
              }
              photo_orientation
            }
            items {
              related_projects {
                document {
                  data {
                    title {
                      text
                    }
                    image {
                      url
                    }
                  }
                  uid
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
