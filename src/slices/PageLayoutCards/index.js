import React from 'react'
import { graphql } from 'gatsby'
import { Image } from 'components/Image'
import { getUnlessEmptyString } from 'helpers'
import { get } from 'lodash'

import {
  Container,
  Headline,
  Description,
  Card,
  ImageWrapper,
  CardContainer,
  CardTitle,
  ImageContainer,
  TimeStamp,
  Wrapper,
  SecondaryLink,
} from './index.styled'
import { Link } from 'components/Link'
import Button from 'components/Button'

const date = new Date();

export const PageLayoutCards = ({ data }) => (
  <Container>
    <Headline>{get(data, 'primary.title1.text')}</Headline>
    <CardContainer>
      {get(data, 'items', []).map(item => (
        <Card>
          <ImageWrapper>
            <ImageContainer>
              <Link to={get(item, 'link.url')}>
                <Image 
                  alt={getUnlessEmptyString(item, 'image.alt')}     
                  fluid={get(item, 'image.localFile.childImageSharp.fluid')} 
                  fadeIn={false}   
                />
              </Link>
            </ImageContainer>
          </ImageWrapper>
          <Wrapper>
            <TimeStamp>{date.toDateString(get(item, 'date'))}</TimeStamp>
            <CardTitle>{get(item, 'title1.text')}</CardTitle>
            <Description
              dangerouslySetInnerHTML={{
                __html: get(item, 'description.html'),
              }}
            />
            <SecondaryLink to={get(item, 'link.url')}>read more</SecondaryLink>
          </Wrapper>
        </Card>
      ))}
    </CardContainer>
    <Button to="/">more news</Button>
  </Container>
)

export const query = graphql`
  fragment PageLayoutCards on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCards {
            id
            primary {
              title1 {
                text
              }
            }
            items {
              image {                
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              date
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
