import React from 'react'
import { ModalConsumer } from 'controllers/ModalContext'

export const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hideModal }) =>
      Component ? <Component {...props} hideModal={hideModal} /> : null
    }
  </ModalConsumer>
)
