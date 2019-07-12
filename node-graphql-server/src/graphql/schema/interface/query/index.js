const { GraphQLInterfaceType } = require('graphql');

const { GoodsList } = require('../../../types')

const query = new GraphQLInterfaceType({
  name: 'Query',
  fields: {
    goodsList: {
      type: GoodsList
    }
  }
})

module.exports = query
