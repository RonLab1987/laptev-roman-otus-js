const initialData = require('./initial-data')
const ProductStorage = require('./product-storage')
const ManufacturerStorage = require('./manufacturer-storage')
const CategoryStorage = require('./category-storage')

module.exports = {
  product: new ProductStorage(initialData.productList),
  manufacturer: new ManufacturerStorage(initialData.manufacturerList),
  category: new CategoryStorage(initialData.categoryList),
}
