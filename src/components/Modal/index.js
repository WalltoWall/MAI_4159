import React from 'react'

import {
  overlayClassName,
  Container,
  Content,
  CloseButton,
  CloseIcon,
} from './index.styled'

export const Modal = ({ children, size, hideModal, ...props }) => (
  <Container
    overlayClassName={overlayClassName}
    onRequestClose={hideModal}
    ariaHideApp={false}
    isOpen
    size={size}
    {...props}
  >
    <CloseButton onClick={hideModal}>
      <CloseIcon />
    </CloseButton>
    <Content>{children}</Content>
  </Container>
)
