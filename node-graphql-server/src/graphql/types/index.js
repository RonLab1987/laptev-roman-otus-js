const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} = require('graphql');

const ProductPrice = new GraphQLObjectType({
  name: 'ProductPrice',
  fields: () => ({
    currency: {
      type: GraphQLString
    },
    consumer: {
      type: GraphQLFloat
    },
    wholesale: {
      type: GraphQLFloat
    }
  })
})

const ProductManufacturer = new GraphQLObjectType({
  name: 'ProductManufacturer',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
  })
})

const Product = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    uuid: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    shortDescription: {
      type: GraphQLString
    },
    color: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    price: {
      type: GraphQLNonNull(ProductPrice)
    },
    stockBalance: {
      type: GraphQLNonNull(GraphQLInt)
    },
    manufacturer: {
      type: GraphQLNonNull(ProductManufacturer)
    }
  })
})


const ProductsList = new GraphQLList(Product)

module.exports = {
  Product,
  ProductPrice,
  ProductManufacturer,
  ProductsList
}