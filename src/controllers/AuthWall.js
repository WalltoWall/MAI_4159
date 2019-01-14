import React from 'react'
import PropTypes from 'prop-types'
import md5 from 'md5'

export class AuthWall extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    passwordMd5: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      authenticated: false,
      key: `AuthWall___${this.props.id}`,
    }
  }

  async componentDidMount() {
    const val = await get(this.state.key)
    if (val === this.props.passwordMd5) this.setState({ authenticated: true })
  }

  signin = password => {
    if (md5(password) !== this.props.passwordMd5) return false

    this.setState({ authenticated: true })
    set(this.state.key, md5(password))

    return true
  }

  signout = () => {
    this.setState({ authenticated: false })
    del(this.state.key)

    return true
  }

  render() {
    return this.props.children({
      signin: this.signin,
      signout: this.signout,
      authenticated: this.state.authenticated,
    })
  }
}

class Store {
  constructor(dbName = 'keyval-store', storeName = 'keyval') {
    this.storeName = storeName
    this._dbp = new Promise((resolve, reject) => {
      const openreq = indexedDB.open(dbName, 1)
      openreq.onerror = () => reject(openreq.error)
      openreq.onsuccess = () => resolve(openreq.result)
      // First time setup: create an empty object store
      openreq.onupgradeneeded = () => {
        openreq.result.createObjectStore(storeName)
      }
    })
  }
  _withIDBStore(type, callback) {
    return this._dbp.then(
      db =>
        new Promise((resolve, reject) => {
          const transaction = db.transaction(this.storeName, type)
          transaction.oncomplete = () => resolve()
          transaction.onabort = transaction.onerror = () =>
            reject(transaction.error)
          callback(transaction.objectStore(this.storeName))
        })
    )
  }
}
let store
function getDefaultStore() {
  if (!store) store = new Store()
  return store
}
function get(key, store = getDefaultStore()) {
  let req
  return store
    ._withIDBStore('readonly', store => {
      req = store.get(key)
    })
    .then(() => req.result)
}
function set(key, value, store = getDefaultStore()) {
  return store._withIDBStore('readwrite', store => {
    store.put(value, key)
  })
}
function del(key, store = getDefaultStore()) {
  return store._withIDBStore('readwrite', store => {
    store.delete(key)
  })
}
