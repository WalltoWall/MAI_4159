import React from 'react'
import { Formik } from 'formik'
import { noop } from 'lodash'

import {
  Container,
  Content,
  Form,
  SearchQuery,
  SearchButton,
  SearchButtonIcon,
  MobileContent,  
  MobileForm,
  MobileSearchQuery,
  MobileSearchButton,
  MobileSearchButtonIcon
} from './index.styled'

export const SearchBar = ({ query = '', onSubmit = noop }) => (
  <Container>
    <Content>
      <Formik
        initialValues={{ query }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values)
          setSubmitting(false)
        }}
        render={({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <SearchQuery
              type="text"
              name="query"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Search&hellip;"
              value={values.query}
            />
            <SearchButton
              type="submit"
              ariaLabel="Search"
              disabled={isSubmitting}
            >
              <SearchButtonIcon />
            </SearchButton>
          </Form>
        )}
      />
    </Content>
  </Container>
)

export const SearchBarTemp = ({ query = '', onSubmit = noop }) => (  
  <MobileContent>
    <Formik
      initialValues={{ query }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false)
      }}
      render={({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <MobileForm onSubmit={handleSubmit}>
          <MobileSearchQuery
            type="text"
            name="query"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Search&hellip;"
            value={values.query}
          />
          <MobileSearchButton
            type="submit"
            ariaLabel="Search"
            disabled={isSubmitting}
          >
            <MobileSearchButtonIcon />
          </MobileSearchButton>
        </MobileForm>
      )}
    />
  </MobileContent>  
)





