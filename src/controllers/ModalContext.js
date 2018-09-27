import React from 'react'

const ModalContext = React.createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
})

export const ModalConsumer = ModalContext.Consumer

export class ModalProvider extends React.Component {
  state = {
    component: null,
    props: {},
  }

  showModal = (component, props = {}) => {
    this.setState({
      component,
      props,
    })
  }

  hideModal = () => {
    this.setState({
      component: null,
      props: {},
    })
  }

  render() {
    return React.createElement(
      ModalContext.Provider,
      {
        value: {
          ...this.state,
          showModal: this.showModal,
          hideModal: this.hideModal,
        },
      },
      this.props.children
    )
  }
}
