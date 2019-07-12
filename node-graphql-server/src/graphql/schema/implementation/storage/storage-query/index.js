const { GraphQLObjectType } = require('graphql');

const { GoodsList } = require('../../../../types')
const { query } = require('../../../interface')

function StorageQuery(storage) {
  return new GraphQLObjectType({
    name: 'QueryStorage',
    interfaces: [query],
    fields: {
      goodsList: {
        type: GoodsList,
        resolve() {
          return storage.goods.list()
        }
      }
    }
  })
}

module.exports = StorageQuery
