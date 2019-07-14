const graphql = require('graphql');

const types = require('../../../../types')
const { mutation } = require('../../../interface')

const initHandlers = require('../handlers')

function StorageMutation(storage) {
  const handlers = initHandlers(storage)

  return new graphql.GraphQLObjectType({
    name: 'StorageMutation',
    interfaces: [mutation],
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
        },
        resolve(_, args) {
          return handlers.patchProductInfo(args)
        }
      }
    }
  })
}

module.exports = StorageMutation
