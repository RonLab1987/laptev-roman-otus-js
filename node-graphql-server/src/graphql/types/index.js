const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} = require('graphql');

const GoodPrice = new GraphQLObjectType({
  name: 'GoodPrice',
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

const Good = new GraphQLObjectType({
  name: 'Good',
  fields: () => ({
    uuid: {
      type: GraphQLString
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
      type: GoodPrice
    },
    stockBalance: {
      type: GraphQLInt
    },
    companyId: {
      type: GraphQLInt
    }
  })
})


const GoodsList = new GraphQLList(Good)

module.exports = {
  Good,
  GoodPrice,
  GoodsList
}