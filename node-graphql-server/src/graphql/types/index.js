const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLInputObjectType
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
      type: GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    country: {
      type: GraphQLString
    },
  })
})

const ProductManufacturerList = new GraphQLList(ProductManufacturer)

const ProductCategory = new GraphQLObjectType({
  name: 'ProductCategory',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    }
  })
})

const ProductCategoryList = new GraphQLList(ProductCategory)

const Product = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt)
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
    },
    category: {
      type: GraphQLNonNull(ProductCategory)
    }
  })
})

const ProductList = new GraphQLList(Product)

const ProductInfoPatch = new GraphQLInputObjectType({
  name: 'ProductInfoPatch',
  fields: () => ({
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
    manufacturerId: {
      type: GraphQLInt
    },
    categoryId: {
      type: GraphQLInt
    }
  })
})

module.exports = {
  ProductPrice,
  ProductManufacturer,
  ProductManufacturerList,
  ProductCategory,
  ProductCategoryList,
  Product,
  ProductList,
  ProductInfoPatch
}