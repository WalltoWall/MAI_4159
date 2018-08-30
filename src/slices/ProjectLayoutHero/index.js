import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { MobileNavOverlay} from 'components/Header/Mobile.styled'
import { 
  Container, 
  Image, 
  Content, 
  Title, 
  Header,
  SubTitle,
  ClipOverlay,
  InfoBlurb,
  InfoLine,
} from './index.styled'
import { HTMLContent } from 'components/HTMLContent'

export const ProjectLayoutHero = ({ data }) => (
    <Container>
      <Image src={get(data, 'primary.image.url')} />
      <Content>
        <Header>
          <Title>{get(data, 'primary.project_title.text')}</Title>
          <SubTitle>{get(data, 'primary.project_subtitle.text')}</SubTitle>
        </Header>
        <InfoLine/>
        <div className={InfoBlurb}>
          <h3>year completed</h3>
          <p>{get(data, 'primary.year_completed.text')}</p>
        </div>
        <InfoLine/>
        <div className={InfoBlurb}>
          <h3>awards</h3>
          <p>{get(data, 'primary.awards.text')}</p>
        </div>
        <InfoLine/>
        <div className={InfoBlurb}>
          <h3>documents</h3>
          <p>{get(data, 'primary.awards.text')}</p>
        </div>
      </Content> 
      <ClipOverlay />
      <MobileNavOverlay/>
    </Container>
)
 export const query = graphql`
  fragment ProjectLayoutHero on Query {
    prismicProject(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicProjectLayoutHero {
            id
            items {
              documents {
                text
              }
            }
            primary {
              image {
                url
              }
              project_title {
                text
              }
              project_subtitle {
                text
              }
              year_completed {
                text
              }
              awards {
                text
              }
            }
          }
        }
      }
    }
  }
`        
// <HTMLContent html={get(data, 'primary.awards.html')} />