const { GraphQLObjectType, GraphQLInt, GraphQLNonNull } = require('graphql');

const { ProductsList } = require('../../../../types')
const { query } = require('../../../interface')

function StorageQuery(storage) {
  return new GraphQLObjectType({
    name: 'StorageQuery',
    interfaces: [query],
    fields: {
      productsList: {
        type: ProductsList,
        args: {
          companyId: {
            type: GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(_, args) {
          return new Promise(async (resolve, reject) => {
            try {
              let productList = await storage.product.list(args)
              productList = productList.map(async (item) => {
                const manufacturer = await storage.manufacturer.getById(item.manufacturerId)
                return {
                  ...item,
                  manufacturer
                }
              })
              resolve(productList)
            } catch (error) {
              reject(error)
            }
          })
        }
      }
    }
  })
}

module.exports = StorageQuery
