import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Headline, Image, Description, DescriptionWrapper, SplitPanelWrapper } from './index.styled'
import { Link } from 'components/Link.js'


export const PageLayoutSplitPanels = ({ data }) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <Link to={get(item, 'link.url')}>
      <SplitPanelWrapper>
          <Image src={get(item, 'image.url')} />
          <DescriptionWrapper>
            <Headline
              dangerouslySetInnerHTML={{ __html: get(item, 'title1.html') }}
             />
            <Description
              dangerouslySetInnerHTML={{ __html: get(item, 'description.html') }}
            />
          </DescriptionWrapper>
      </SplitPanelWrapper>
     </Link>
  ))}
  </Container>
)

export const query = graphql`
  fragment PageLayoutSplitPanels on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutSplitPanels {
            id
            items {
              image {
                url
              }
              title1 {
                html
              }
              description {
                html
              }
              link {
                url
              }
            }
          }
        }
      }
    }
  }
`

