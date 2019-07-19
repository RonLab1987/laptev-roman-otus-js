const graphql = require('graphql');

const types = require('../../../types')

const query = new graphql.GraphQLInterfaceType({
  name: 'Query',
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
      }
    },
    product: {
      type: types.Product,
      args: {
        id: {
          type: graphql.GraphQLNonNull(graphql.GraphQLInt)
        }
      }
    },
    productManufacturerList: {
      type: types.ProductManufacturerList
    },
    productManufacturer: {
      type: types.ProductManufacturer,
      args: {
        id: {
          type: graphql.GraphQLNonNull(graphql.GraphQLInt)
        }
      }
    },
    productCategoryList: {
      type: types.ProductCategoryList
    },
    productCategory: {
      type: types.ProductCategory,
      args: {
        id: {
          type: graphql.GraphQLNonNull(graphql.GraphQLInt)
        }
      }
    }
  }
})

module.exports = query
