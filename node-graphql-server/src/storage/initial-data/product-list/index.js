const schemaFaker = require('../../../utils/schema-faker')
const schema = require('./faker-schema.json')

const productList = schemaFaker(schema).map((item, index) => {
  item.id = index
  item.price.wholesale = item.price.consumer * 0.75
  return item
})

module.exports = productList