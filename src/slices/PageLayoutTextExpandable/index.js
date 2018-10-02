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
  ContentWrapper,
  StyledExpand,
} from './index.styled'


const renderContent = (data, on, toggle) => (
  <div>
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
  </div>
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
