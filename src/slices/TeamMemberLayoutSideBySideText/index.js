import React from 'react'
import { graphql } from 'gatsby'
import { Content } from 'components/Content'
import { 
  Container,
  Column, 
  Title, 
  TextBlock, 
  paddingTop, 
  MobilePadding,
  HTMLParagraph,
} from './index.styled'
import { get, isEmpty } from 'lodash';


export const TeamMemberLayoutSideBySideText = ({ data }) => {
  return (
  <Container>
    <Content>
      {!isEmpty(data.items) && (
        <Column>
        <Title>Awards</Title>
        {get(data, "items").map(award => (
          <TextBlock key={award.award_name}>  
            <h3>{award.award_name}</h3>
            <p>{award.award_detail.text}</p>
          </TextBlock>
        ))}
      </Column>
      )}      
      <Column>
        <MobilePadding />
        <Title>Qualifications</Title>
        <HTMLParagraph html={get(data, "primary.qualifications.html")} />
        <MobilePadding />
        {!isEmpty(data.items) && (
          <>
            <Title className={paddingTop}>Experience</Title>      
            <HTMLParagraph html={get(data, "primary.experience.html")} />
          </>
        )}        
      </Column>
      {isEmpty(data.items) && (
        <Column>
          <Title>Experience</Title>      
          <HTMLParagraph html={get(data, "primary.experience.html")} />
        </Column>
      )}
    </Content>
  </Container>
)
}
export const query = graphql`
  fragment TeamMemberLayoutSideBySideText on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutSideBySideText {
            id
            primary {
              qualifications {                
                html
              }
              experience {                
                html
              }
            }
            items {
              award_name
              award_detail {
                text
              }
            }
          }
        }
      }
    }
  }
`