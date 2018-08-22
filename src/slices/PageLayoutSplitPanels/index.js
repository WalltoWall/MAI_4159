import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Container, Headline, Image, Description, DescriptionWrapper, SplitPanelWrapper, ServicesButton, ImageContainer } from './index.styled'
import { Link } from 'components/Link'

export const PageLayoutSplitPanels = ({ data }) => (
  <Container>
    {get(data, 'items', []).map(item => (
      <Link to={get(item, 'link.url')}>
      <SplitPanelWrapper>
          <ImageContainer>
            <Image src={get(item, 'image.url')} />
          </ImageContainer>
          <DescriptionWrapper>
            <Headline>{get(item, 'title1.text')}</Headline>
            <Description
              dangerouslySetInnerHTML={{ __html: get(item, 'description.html') }}
            />
            <ServicesButton to="/">learn more</ServicesButton>
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
                text
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

