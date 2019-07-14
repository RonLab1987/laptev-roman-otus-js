const graphql = require('graphql');

const types = require('../../../../types')
const { query } = require('../../../interface')

const initHandlers = require('../handlers')

function StorageQuery(storage) {
  const handlers = initHandlers(storage)

  return new graphql.GraphQLObjectType({
    name: 'StorageQuery',
    interfaces: [query],
    fields: {
      productList: {
        type: types.ProductList,
        args: {
          manufacturerId: {
            type: graphql.GraphQLInt
          },
          categoryId: {
            type: graphql.GraphQLInt
          }
        },
        resolve(_, args) {
          return handlers.productList(args)
        }
      },
      product: {
        type: types.Product,
        args: {
          id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLInt)
          }
        },
        resolve(_, args) {
          return handlers.product(args)
        }
      },
      productManufacturerList: {
        type: types.ProductManufacturerList,
        resolve(_, args) {
          return handlers.productManufacturerList(args)
        }
      },
      productManufacturer: {
        type: types.ProductManufacturer,
        args: {
          id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLInt)
          }
        },
        resolve(_, args) {
          return handlers.productManufacturer(args)
        }
      },
      productCategoryList: {
        type: types.ProductCategoryList,
        resolve(_, args) {
          return handlers.productCategoryList(args)
        }
      },
      productCategory: {
        type: types.ProductCategory,
        args: {
          id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLInt)
          }
        },
        resolve(_, args) {
          return handlers.productCategory(args)
        }
      }
    }
  })
}

module.exports = StorageQuery
