const initialData = require('./initial-data')
const ProductStorage = require('./product-storage')
const ManufacturerStorage = require('./manufacturer-storage')

module.exports = {
  product: new ProductStorage(initialData.productList),
  manufacturer: new ManufacturerStorage(initialData.manufacturerList)
}
