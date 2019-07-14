const graphql = require('graphql');

const types = require('../../../types')

const query = new graphql.GraphQLInterfaceType({
  name: 'Mutation',
  fields: {
    patchProductInfo: {
      type: types.Product,
      args: {
        id: {
          type: graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        patch: {
          type: graphql.GraphQLNonNull(types.ProductInfoPatch)
        }
      }
    }
  }
})

module.exports = query
