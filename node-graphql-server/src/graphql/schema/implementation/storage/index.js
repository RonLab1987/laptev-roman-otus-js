const { GraphQLSchema } = require('graphql');

const StorageQuery = require('./storage-query')

function storageGraphQLSchema(storage) {
  if (!storage) {
    throw new Error('storage required')
  }

  return new GraphQLSchema({
    query: StorageQuery(storage)
  })
}

module.exports = storageGraphQLSchema
