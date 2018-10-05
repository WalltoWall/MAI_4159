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
  Category,
  StyledExpand,
  Title,
} from './index.styled'


const renderContent = ( data, on, toggle ) => (
  <div>
    {get(data, 'items', []).map(item => (
      <>
      <Category>
        <Content>
          {get(item, 'intro.text') && (
            <Intro html={get(item, 'intro.html')} />
          )}
          <StyledExpandButton isExpanded={on} onClick={toggle} />
         </Content>
      </Category>
      <StyledExpand open={on}>
        <Text html={get(item, 'text.html')} />
      </StyledExpand>
      </>
    ))}
  </div>
)

export const PageLayoutTextExpandable = ({ data }) => (
    <Container>
    <Title>{get(data, 'primary.title1.text')}</Title>
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
