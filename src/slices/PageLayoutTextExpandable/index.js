import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Toggle } from 'react-powerplug'

import {
  Container,
  Content,
  Intro,
  Text,
  StyledExpandButton,
  Desktop,
  ContentWrapper,
  StyledExpand,
} from './index.styled'



// Show all highlights and hide text in Expand.
const renderContent = (data, on, toggle) => (
  <Desktop>
    {get(data, 'primary.text.text') && (
      <>
      <ContentWrapper>
        <Content>
          {get(data, 'primary.intro.text') && (
            <Intro html={get(data, 'primary.intro.html')} />
          )}
          <StyledExpandButton isExpanded={on} onClick={toggle} />
         </Content>
      </ContentWrapper>
      <StyledExpand open={on}>
        <Text html={get(data, 'primary.text.html')} />
      </StyledExpand>
      </>
    )}
  </Desktop>
)

export const PageLayoutTextExpandable = ({ data }) => (
  <Container>
    <Toggle>
      {({ on, toggle }) => (
        <>
          {renderContent(data, on, toggle)}
        </>
      )}
    </Toggle>
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
