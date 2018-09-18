import invariant from 'invariant'
import { getOr, has, head, isString } from 'lodash/fp'
import qs from 'querystring'

// @private
// Returns path without leading and/or trailing '/'.
const _sanitizePath = path => path.replace(/(^\/|\/$)/g, '')

// Modular scale
export const ms = (v = 0, r = Math.sqrt(2)) =>
  Math.round(10 * Math.pow(r, v)) / 10

// Space separated values
export const ssv = f => (...v) => v.map(f).join(' ')

// Returns true if the URL is internal, false otherwise.
export const isInternal = s => isString(s) && /^\/(?!\/)/.test(s)

// Returns true if window exists, false otherwise. Helpful to determine if
// rendering on the server (i.e. without window).
export const windowExists = () => typeof window !== 'undefined'

// Returns "right" if type ends with "- Right", "left" otherwise. Used to
// determine styling for PageLayoutDestinationBar.
export const deriveTypeSide = t => (t.match(/- Right$/) ? 'right' : 'left')

// Returns true if type ends with "- Alt", false otherwise. Used to determine
// styling for PageLayoutDestinationBar.
export const deriveTypeAlt = t => t.match(/- Alt$/)

// Returns the value of a given key in the location search query.
export const getLocationQuery = (location, key = '?query', defaultValue = '') =>
  getOr(defaultValue, key, qs.parse(location.search))

// Lodash's get function, but if the value is an empty string, it returns the
// default value instead.
export const getUnlessEmptyString = (obj, key, defaultValue = undefined) => {
  const result = getOr(defaultValue, key, obj)
  return result === '' ? defaultValue : result
}

// Returns an array of nodes from the connection data provided as a result of a
// GraphQL query.
export const nodes = connection => {
  invariant(
    has('edges', connection) &&
      Array.isArray(connection.edges) &&
      has('node', head(connection.edges)),
    'connection does not appear to be the result of a GraphQL query'
  )
  return connection.edges.map(edge => edge.node)
}

// Returns true if rawPath is a child of rawCurrentPath, false otherwise.
export const isPathActive = (rawCurrentPath, rawPath) => {
  const currentPath = _sanitizePath(rawCurrentPath)
  const path = _sanitizePath(rawPath)
  return path.length > 0 && currentPath.startsWith(path)
}
