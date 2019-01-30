import React from 'react'
import { Layout } from 'components/Layout'
import {Container} from './_404.styled'
import { Button } from 'components/Button'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Sorry, We can't find the page you requested.</h1>
      <p>To return to the main site, start here</p>
      <Button to='/'>
        Back to Home
      </Button>
    </Container>
  </Layout>
)

export default NotFoundPage