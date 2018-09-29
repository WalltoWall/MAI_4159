import React from 'react'
import { graphql } from 'gatsby'
import { Toggle } from 'react-powerplug'
import Expand from 'react-expand-animated'
import { get, isEmpty } from 'lodash'

import {
  Container,
  Content,
  Intro,
  Highlights,
  Highlight,
  HighlightText,
  HighlightFootnote,
  Text,
  StyledExpandButton,
  Mobile,
  Desktop,
} from './index.styled'

const renderHighlight = item => (
  <Highlight>
    {get(item, 'highlight_text.text') && (
      <HighlightText html={get(item, 'highlight_text.html')} />
    )}
    {get(item, 'highlight_footnote.text') && (
      <HighlightFootnote html={get(item, 'highlight_footnote.html')} />
    )}
  </Highlight>
)

// Hide all highlights and text in Expand.
const renderContent = (data, on, toggle) => (
  <Mobile>
    <Expand open={on}>
      {!isEmpty(get(data, 'items')) && (
        <Highlights>{get(data, 'items', []).map(renderHighlight)}</Highlights>
      )}
      {get(data, 'primary.text.text') && (
        <Text html={get(data, 'primary.text.html')} />
      )}
    </Expand>
    {(!isEmpty(get(data, 'items')) || get(data, 'primary.text.text')) && (
      <StyledExpandButton isExpanded={on} onClick={toggle} />
    )}
  </Mobile>
)

// Show all highlights and hide text in Expand.
const renderContentDesktop = (data, on, toggle) => (
  <Desktop>
    {!isEmpty(get(data, 'items')) && (
      <Highlights>{get(data, 'items', []).map(renderHighlight)}</Highlights>
    )}
    {get(data, 'primary.text.text') && (
      <>
        <Expand open={on}>
          <Text html={get(data, 'primary.text.html')} />
        </Expand>
        <StyledExpandButton isExpanded={on} onClick={toggle} />
      </>
    )}
  </Desktop>
)

export const PageLayoutTextExpandable = ({ data }) => (
  <Container>
    <Content>
      {get(data, 'primary.intro.text') && (
        <Intro html={get(data, 'primary.intro.html')} />
      )}
      <Toggle>
        {({ on, toggle }) => (
          <>
            {renderContent(data, on, toggle)}
            {renderContentDesktop(data, on, toggle)}
          </>
        )}
      </Toggle>
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
