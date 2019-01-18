import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Toggle } from 'react-powerplug'
import { Headline } from 'components/Headline'
import {
  Container,
  Content,
  TextBlock,
  Intro,
  Text,
  StyledExpandButton,
  Category,
  StyledExpand,
} from './index.styled'

const renderContent = (data, index) => (
  <Toggle key={data.text.text + index}>
    {({ toggle, on }) => (
      <>
        <Category>
          <TextBlock>
            {get(data, 'intro.text') && (
              <Intro html={get(data, 'intro.html')} onClick={toggle} />
            )}
            <StyledExpandButton isExpanded={on} onClick={toggle} />
          </TextBlock>
        </Category>
        <StyledExpand open={on}>
          <Text html={get(data, 'text.html')} />
        </StyledExpand>
      </>
    )}
  </Toggle>
)

export const PageLayoutTextExpandable = ({ data }) => (
  <Container>
    <Content>
      <Headline>{get(data, 'primary.title1.text')}</Headline>
      {get(data, 'items', []).map((item, index) => renderContent(item, index))}
    </Content>
  </Container>
)

export const fragment = graphql`
  fragment PageLayoutTextExpandable on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutTextExpandable {
            id
            primary {
              title1 {
                text
              }
            }
            items {
              intro {
                text
                html
              }
              text {
                text
                html
              }
            }
          }
        }
      }
    }
  }
`
