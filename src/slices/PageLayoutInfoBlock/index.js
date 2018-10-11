import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Image } from 'components/Image'
import { HTMLContent } from 'components/HTMLContent'
import { getUnlessEmptyString } from 'helpers'
import { 
  Container,
  Content,
  ImageContainer,
  Title,
  StyledHtmlClassName,
} from './index.styled'

export const PageLayoutInfoBlock = ({ data }) => (
    <h1>hello world</h1>
)

export const query = graphql`
  fragment PageLayoutInfoBlock on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutInfoBlock {
            id            
          }
        }
      }
    }
  }
`