import React from 'react'
import { Lunr } from 'react-lunr'
import { Location } from '@reach/router'
import { navigate, graphql } from 'gatsby'
import { get, isEmpty } from 'lodash'
import qs from 'querystring'
import { getLocationQuery } from 'helpers'
import { Layout } from 'components/Layout'
import { SearchBar } from 'components/SearchBar'
import { SearchResults } from 'components/SearchResults'
import { Result as SearchResult } from 'components/SearchResults/Result'
import { Container, ContentWrapper, Content, StyledHTMLContent } from './_index.styled'

const renderResult = item => (
  <SearchResult
    key={item.id}
    path={item.path}
    title={item.title}
    metaTitle={item.metaTitle}
    metaDescription={item.metaDescription}
    excerpt={item.excerpt}
  />
)

const initResultView = (query, queryType, render) => (  
  <StyledHTMLContent>
    {query ? (
      <>
        <h3>No Results for {queryType}</h3>
        <p>
          0 {queryType} results for <strong>{query}</strong>
        </p>
      </>
    ) : (
    render &&  
    (
      <>
        <h2>Search</h2>
        <p>Enter a search term in the search field above.</p>
      </>
    ))
    }
  </StyledHTMLContent>  
)

const renderSearchResult = ({query, queryType, results}) => (
  <SearchResults query={query} queryType={queryType}>
    {results.map(renderResult)}
  </SearchResults>
)

const SearchProject = ({ data }) => {
  console.log("xxxxxx")
  return (
    <Layout>
      <Location>
        {({ location }) => (
          <Container>                 
            <SearchBar
              query={getLocationQuery(location)}
              onSubmit={({ query }) => {
                navigate(
                  `/search${query ? `?${qs.stringify({ query })}` : ''}`
                )
              }}
            />                                
            <Lunr
              query={getLocationQuery(location)}
              index={get(data, 'localSearchProjects.index')}
              store={get(data, 'localSearchProjects.store')}              
            >
              {({ query, results }) => (
                <>                
                  <ContentWrapper hasResults={isEmpty(results)}>
                    <Content>
                      {
                        isEmpty(results) ? 
                        initResultView(query,'Projects', true) : 
                        renderSearchResult({query, 'queryType':'Projects', results})
                      }
                    </Content>
                  </ContentWrapper>
                </>
              )}        
            </Lunr>
            <Lunr
              query={getLocationQuery(location)}
              index={get(data, 'localSearchPages.index')}
              store={get(data, 'localSearchPages.store')}              
            >
              {({ query, results }) => (
                <>                
                  <ContentWrapper hasResults={isEmpty(results)}>
                    <Content>
                      {
                        isEmpty(results) ? 
                        initResultView(query, 'Pages', false) : 
                        renderSearchResult({query, 'queryType':'Pages', results})
                      }
                    </Content>
                  </ContentWrapper>
                </>
              )}        
            </Lunr>
          </Container>
        )} 
      </Location>
    </Layout>
  )}
  

export default SearchProject

export const query = graphql`
  query {
    localSearchProjects {
      index
      store
    }
    localSearchPages {
      index
      store
    }
  }
`