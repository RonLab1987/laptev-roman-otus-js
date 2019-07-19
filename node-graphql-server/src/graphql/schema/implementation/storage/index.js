const { GraphQLSchema } = require('graphql');

const StorageQuery = require('./storage-query')
const StorageMutation = require('./storage-mutation')

function storageGraphQLSchema(storage) {
  if (!storage) {
    throw new Error('storage required')
  }

  return new GraphQLSchema({
    query: StorageQuery(storage),
    mutation: StorageMutation(storage)
  })
}

module.exports = storageGraphQLSchema
