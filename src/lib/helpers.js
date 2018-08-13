import invariant from 'invariant'
import { has, head } from 'lodash/fp'

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
