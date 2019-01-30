import React from 'react'
import { graphql } from 'gatsby'
import { get, slice } from 'lodash'
import { format } from 'date-fns'
import { Image } from 'components/Image'
import arrow from 'assets/yellow-arrow.svg'
import { getUnlessEmpty } from 'helpers'
import { Button } from 'components/Button'
import { Headline } from 'components/Headline'
import {
  Content,
  Container,
  ImageContainer,
  StyledLink,
  PostTitle,
  PostContent,
  ReadMore,
  ContentContainer,
  PostDate,
  ArrowWrapper,
  ReadMoreWrapper,
  SectionContainer,
  ButtonContainer,
  ButtonLink,
} from './index.styled'

export const PageLayoutNewsSection = ({ data, rootData }) => {
  let newsPosts = get(rootData, 'allPrismicNewsPost.edges').sort((a, b) => {
    return (
      new Date(get(b, 'node.data.publish_date')) -
      new Date(get(a, 'node.data.publish_date'))
    )
  })

  return (
    <SectionContainer>
      {get(data, 'primary.title1.text') && (
        <Headline>{get(data, 'primary.title1.text')}</Headline>
      )}
      <Container>
        <Content>
          <GridList newsPosts={newsPosts} data={data} />
        </Content>
      </Container>
    </SectionContainer>
  )
}

class GridList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.newsPosts,
      visible: get(this.props.data, 'primary.page_context') === 'Home' ? 4 : 4,
    }
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 4 }
    })
  }

  truncateStr = str => {
    let arrstr = slice(str.split(' '), 0, 12).join(' ')
    if (str.split(' ').length <= 12) {
      return str
    } else {
      return arrstr + '...'
    }
  }

  render() {
    return (
      <>
        {this.state.items
          .slice(0, this.state.visible)
          .map((news_post, index) => {
            return (
              <StyledLink
                to={'/' + get(news_post, 'node.uid')}
                key={get(news_post, 'node.uid') + index}
              >
                {get(
                  news_post,
                  'node.data.article_thumb_image.localFile.childImageSharp.fluid'
                ) && (
                  <ImageContainer>
                    <Image
                      fluid={get(
                        news_post,
                        'node.data.article_thumb_image.localFile.childImageSharp.fluid'
                      )}
                      alt={getUnlessEmpty(
                        'node.data.article_thumb_image.alt',
                        news_post
                      )}
                      fadeIn={false}
                    />
                  </ImageContainer>
                )}
                <ContentContainer>
                  <PostDate>
                    {format(
                      new Date(get(news_post, 'node.data.publish_date')),
                      'MMMM D, YYYY'
                    )}
                  </PostDate>
                  <PostTitle>
                    {get(news_post, 'node.data.article_title1.text')}
                  </PostTitle>
                  <PostContent>
                    {get(news_post, 'node.data.article_content.text')
                      ? this.truncateStr(
                          get(news_post, 'node.data.article_content.text')
                        )
                      : ''}
                  </PostContent>
                  <ReadMoreWrapper>
                    <ReadMore to={get(news_post, 'node.uid')}>
                      Read more
                    </ReadMore>
                    <ArrowWrapper src={arrow} />
                  </ReadMoreWrapper>
                </ContentContainer>
              </StyledLink>
            )
          })}
        {this.state.visible < this.state.items.length &&
          (get(this.props.data, 'primary.page_context') === 'News' && (
            <ButtonContainer>
              <Button onClick={this.loadMore}>Load more</Button>
            </ButtonContainer>
          ))}
        {get(this.props.data, 'primary.page_context') === 'Home' && (
          <ButtonLink to="/stories">
            <Button>More Stories</Button>
          </ButtonLink>
        )}
      </>
    )
  }
}

export const query = graphql`
  fragment PageLayoutNewsSection on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutNewsSection {
            id
            primary {
              title1 {
                text
              }
              page_context
            }
          }
        }
      }
    }
    allPrismicNewsPost(filter: { tags: { ne: "CMS Guide" } }) {
      edges {
        node {
          data {
            publish_date
            article_title1 {
              text
            }
            article_content {
              text
            }
            article_thumb_image {
              alt
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          uid
        }
      }
    }
  }
`
