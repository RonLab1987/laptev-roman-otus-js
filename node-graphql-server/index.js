const storage = require('./src/storage')
const graphQLApiServer = require('./src/graphql-api-server')
const { storageGraphQLSchema } = require('./src/graphql')

graphQLApiServer(storageGraphQLSchema(storage))
