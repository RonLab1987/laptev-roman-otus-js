const { GraphQLInterfaceType, GraphQLNonNull, GraphQLInt } = require('graphql');

const { ProductsList } = require('../../../types')

const query = new GraphQLInterfaceType({
  name: 'Query',
  fields: {
    productsList: {
      type: ProductsList,
      args: {
        companyId: {
          type: GraphQLNonNull(GraphQLInt)
        }
      }
    }
  }
})

module.exports = query
