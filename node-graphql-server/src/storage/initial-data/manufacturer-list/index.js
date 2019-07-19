const schemaFaker = require('../../../utils/schema-faker')
const schema = require('./faker-schema.json')

const manufacturerList = schemaFaker(schema).map((item, index) => ({
  ...item,
  id: index + 1
}))

module.exports = manufacturerList