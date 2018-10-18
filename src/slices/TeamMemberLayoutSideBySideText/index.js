import React from 'react'
import { graphql } from 'gatsby'
import { Container, Column, Title, TextBlock, paddingTop, MobilePadding } from './index.styled'
import { get } from 'lodash';
import { Content } from 'components/Content'

export const TeamMemberLayoutSideBySideText = ({ data }) => (
  <Container>
    <Content>
      <Column>
        <Title>Awards</Title>
        {get(data, "items").map(award => (
          <TextBlock
            key={award.award_name}
          >  
            <h3>{award.award_name}</h3>
            <p>{award.award_detail.text}</p>
          </TextBlock>
        ))}
      </Column>
      <Column>
        <MobilePadding />
        <Title>Qualifications</Title>
        <p>{get(data, "primary.qualifications.text")}</p>
        <MobilePadding />
        <Title
          className={paddingTop}
        >Experience</Title>
        <p>{get(data, "primary.experience.text")}</p>
      </Column>
    </Content>
  </Container>
)
export const query = graphql`
  fragment TeamMemberLayoutSideBySideText on Query {
    prismicTeamMember(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicTeamMemberLayoutSideBySideText {
            id
            primary {
              qualifications {
                text
              }
              experience {
                text
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
