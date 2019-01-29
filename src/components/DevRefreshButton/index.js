import React from 'react'

import { Container } from './index.styled'

const refreshData = () => fetch('/__refresh', { method: 'post' })

export const DevRefreshButton = () => (
  <Container onClick={refreshData}>Refresh Data</Container>
)
