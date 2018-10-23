import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {format} from 'date-fns'
import { Image } from 'components/Image'
import arrow from 'assets/yellow-arrow.svg'
import { getUnlessEmptyString } from 'helpers'
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

export const PageLayoutNewsSection = ({data, rootData}) => {
  let newsPosts = get(rootData, 'allPrismicNewsPost.edges').sort((a,b) => {    
    return new Date(get(b, "node.data.date")) - new Date(get(a, "node.data.date"))
  })

  return (
    <SectionContainer>
      {get(data, "primary.title1.text") && (
        <Headline>{get(data, "primary.title1.text")}</Headline>
      )}      
      <Container>
        <Content>
          <GridList newsPosts={newsPosts} data={data}/>    
        </Content>
      </Container>      
    </SectionContainer>
  )
}

class GridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.newsPosts,
      visible: (get(this.props.data, "primary.page_context") === "Home") ? 4 : 4      
    };    
  }

  loadMore = () => {
    this.setState((prev) => {      
      return {visible: prev.visible + 4};
    });
  }
 
  characterLimit = (str, length, ending) => { 
    if (length == null) { 
      length = 85  
    } 
    if (ending == null) { 
      ending = '...'  
    } 
    if (str.length > length) {  
      return str.substring(0, length - ending.length) + ending  
    } else {  
      return str  
    } 
  }

  render() {
    return (
      <>    
        {this.state.items.slice(0, this.state.visible).map((news_post, index) => {
            return (
              <StyledLink to={"/" + get(news_post, 'node.uid')} key={get(news_post, 'node.uid') + index}>
                <ImageContainer>
                  <Image 
                    fluid={get(news_post, 'node.data.image.localFile.childImageSharp.fluid')} 
                    alt={getUnlessEmptyString(get(news_post, 'node.data.image.alt'))} 
                    fadeIn={false} 
                  />
                </ImageContainer>
                <ContentContainer>
                  <PostDate>
                    {format(new Date(get(news_post, 'node.data.date')),
                      'MMMM' +' D' +', '+'YYYY'
                    )}
                  </PostDate>
                  <PostTitle>{get(news_post,'node.data.article_title.text')}</PostTitle>
                  <PostContent>{this.characterLimit(get(news_post, 'node.data.article_content1.text'))}</PostContent>
                  <ReadMoreWrapper>
                    <ReadMore to={get(news_post, 'node.uid')}>Read more</ReadMore>
                    <ArrowWrapper src={arrow} />
                  </ReadMoreWrapper>
                </ContentContainer>
              </StyledLink>
            );
          })}
          {this.state.visible < this.state.items.length && (
            (get(this.props.data, "primary.page_context") === "News") &&
              <ButtonContainer>
                <Button
                  onClick={this.loadMore}                             
                >
                  Load more
                </Button>
              </ButtonContainer>
          )}
          {
            (get(this.props.data, "primary.page_context") === "Home") &&
              <ButtonLink to="/news">
                <Button>
                  See more
                </Button>
              </ButtonLink>
          }          
      </>
    );
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
    allPrismicNewsPost {
      edges {
        node {
          data {                
            date
            article_title {
              text
            }
            article_content1 {
              text
            }
            image {
              alt
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 90) {
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