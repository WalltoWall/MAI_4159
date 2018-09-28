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
