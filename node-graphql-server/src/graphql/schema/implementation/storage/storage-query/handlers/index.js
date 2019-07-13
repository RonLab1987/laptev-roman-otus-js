function initHandlers (storage) {
  return {
    productManufacturerList() {
      return storage.manufacturer.list()
    },
    productManufacturer({ id }) {
      return storage.manufacturer.getById(id)
    },
    productCategoryList() {
      return storage.category.list()
    },
    productCategory({ id }) {
      return storage.category.getById(id)
    },
    async productList(args) {
      const productList = await storage.product.list(args)
      return productList.map(async (item) => {
        return await this.__computeProductType(item)
      })
    },
    async product({ id }) {
      const productItem = await storage.product.getById(id)
      return await this.__computeProductType(productItem)
    },
    async __computeProductType(product) {
      console.log(product)
      const manufacturer = await storage.manufacturer.getById(product.manufacturerId)
      const category = await storage.category.getById(product.categoryId)
      return {
        ...product,
        manufacturer,
        category
      }
    }
  }
}

module.exports = initHandlers