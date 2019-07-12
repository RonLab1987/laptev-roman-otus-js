const express = require('express');
const graphqlHTTP = require('express-graphql');

function initGraphQLApiServer(graphQLSchema) {
  const app = express();

  app.use('/api/v1/graphql', graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  }));
  app.listen(4000, () => console.log('Now browse to localhost:4000/api/v1/graphql'));
  
  return app
}

module.exports = initGraphQLApiServer
