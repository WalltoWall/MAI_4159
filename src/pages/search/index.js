import React from 'react'
import { Location } from '@reach/router'
import { navigate, graphql } from 'gatsby'
import { get, isEmpty } from 'lodash'
import { useFlexSearch } from 'react-use-flexsearch'
import qs from 'querystring'
import { getSearchQuery } from 'helpers'
import { Layout } from 'components/Layout'
import { SearchBar } from 'components/SearchBar'
import { SearchResults } from 'components/SearchResults'
import { ProjectResult } from 'components/SearchResults/ProjectResult'
import { PageResult } from 'components/SearchResults/PageResult'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import SearchBackground from 'assets/search-result-hero.jpg'

import {
  ClipOverlay,
  ImageContainer,
  Title,
  TitleWrapper,
} from 'components/Hero/index.styled'
import {
  Container,
  ContentWrapper,
  Content,
  StyledHTMLContent,
  HeaderImage,
  ProjectGridContainer,
} from './_index.styled'

const renderProjectResult = item => {
  return (
    <ProjectResult
      key={item.id}
      path={item.path}
      title={item.title}
      metaTitle={item.metaTitle}
      metaDescription={item.metaDescription}
      excerpt={item.excerpt}
      imageUrl={item.image}
    />
  )
}

const renderPageResult = item => (
  <PageResult
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
      render && (
        <>
          <h2>Search</h2>
          <p>Enter a search term in the search field above.</p>
        </>
      )
    )}
  </StyledHTMLContent>
)

const renderSearchResult = ({ query, queryType, results }) => (
  <SearchResults query={query} queryType={queryType}>
    {queryType === 'Projects' && (
      <ProjectGridContainer>
        {results.map(renderProjectResult)}
      </ProjectGridContainer>
    )}
    {queryType === 'Pages' && results.map(renderPageResult)}
  </SearchResults>
)

const SearchProject = ({ data, location }) => {
  const query = getSearchQuery('?query', location)

  const pageIndex = get(data, 'localSearchPages.index')
  const pageStore = JSON.parse(get(data, 'localSearchPages.store'))

  const projectIndex = get(data, 'localSearchProjects.index')
  const projectStore = JSON.parse(get(data, 'localSearchProjects.store'))

  const pageResult = useFlexSearch(query, pageIndex, pageStore)
  const projectResult = useFlexSearch(query, projectIndex, projectStore)

  return (
    <Layout>
      <ImageContainer>
        <HeaderImage src={SearchBackground} />
        <ClipOverlay has_filter={'no'} whitebg={true} />
        <TitleWrapper>
          <Title>Search</Title>
        </TitleWrapper>
        <MobileNavOverlay />
      </ImageContainer>
      <Location>
        {({ location }) => (
          <Container>
            <SearchBar
              query={getSearchQuery('?query', location)}
              onSubmit={({ query }) => {
                navigate(`/search${query ? `?${qs.stringify({ query })}` : ''}`)
              }}
            />
            <ContentWrapper hasResults={isEmpty(projectResult)}>
              <Content>
                {isEmpty(projectResult)
                  ? initResultView(query, 'Projects', true)
                  : renderSearchResult({
                      query,
                      queryType: 'Projects',
                      results: projectResult,
                    })}
              </Content>
            </ContentWrapper>

            <ContentWrapper hasResults={isEmpty(pageResult)}>
              <Content>
                {isEmpty(pageResult)
                  ? initResultView(query, 'Pages', false)
                  : renderSearchResult({
                      query,
                      queryType: 'Pages',
                      results: pageResult,
                    })}
              </Content>
            </ContentWrapper>
          </Container>
        )}
      </Location>
    </Layout>
  )
}

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
