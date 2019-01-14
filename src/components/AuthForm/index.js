import React from 'react'
import { Value } from 'react-powerplug'
import { Formik } from 'formik'

import {
  Container,
  Content,
  LockIcon,
  StyledHTMLContent,
  UnsuccessfulMessage,
  Form,
  Field,
  SubmitButton,
  SubmitButtonIcon,
} from './index.styled'

export const AuthForm = ({ onSubmit, ...props }) => (
  <Container {...props}>
    <Content>
      <LockIcon />
      <Value initial={false}>
        {({ value: wasUnsuccessful, set }) => (
          <Formik
            onSubmit={async (values, { setSubmitting }) => {
              const result = await Promise.resolve(onSubmit(values))
              if (!result) set(true)

              setSubmitting(false)
            }}
          >
            <>
              <StyledHTMLContent>
                <p>This section of the site is password protected</p>
                {wasUnsuccessful && (
                  <UnsuccessfulMessage>Incorrect password</UnsuccessfulMessage>
                )}
              </StyledHTMLContent>
              <Form>
                <Field type="password" name="password" placeholder="Password" />
                <SubmitButton type="submit" ariaLabel="Login">
                  <SubmitButtonIcon />
                </SubmitButton>
              </Form>
            </>
          </Formik>
        )}
      </Value>
    </Content>
  </Container>
)
