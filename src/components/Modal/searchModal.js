import React from 'react'
import { Modal } from 'components/Modal'
import { DesktopSearchInput } from 'components/Header/DesktopSearchInput'
import { navigate } from 'gatsby'
import qs from 'querystring'

import { Header } from './searchModal.styled'

export const searchModal = ({ hideModal, ...props }) => (
  <Modal hideModal={hideModal} {...props}>
    <Header>
      <h2>Search</h2>
      <DesktopSearchInput
        onSubmit={({ query }) =>
          navigate(`/search${query ? `?${qs.stringify({ query })}` : ''}`)
        }
      />
    </Header>
  </Modal>
)
