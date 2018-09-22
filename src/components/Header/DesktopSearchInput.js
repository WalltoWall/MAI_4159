import React from 'react'
import { Formik } from 'formik'
import { noop } from 'lodash'

import {
  Container,
  Form,
  SearchQuery,
  SearchButton,
  SearchButtonIcon,
} from './DesktopSearchInput.styled'

export const DesktopSearchInput = ({ initialQuery = '', onSubmit = noop }) => (
  <Container>
    <Formik
      initialValues={{ query: initialQuery }}
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
  </Container>
)
