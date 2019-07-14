
class ProductStorage {
  constructor(productList = []) {
    if (!Array.isArray(productList)) {
      throw new Error('goodsList must be Array')
    }
    this.__productList = productList
  }

  list({ manufacturerId, categoryId }) {
    const list = this.__productList.filter((item) => {
      if (
        manufacturerId !== undefined &&
        item.manufacturerId !== manufacturerId
      ) {
        return false
      }
      if (
        categoryId !== undefined &&
        item.categoryId !== categoryId
      ) {
        return false
      }
      return true
    })
    return Promise.resolve(list)
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      const product = this.__productList.find(
        (item) => item.id === id
      )
      if (product === undefined) {
        return reject(new Error(`Can not find product with id ${id}`))
      }
      return resolve(product)
    })
  }

  patchProductInfo(id, patch = {}) {
    return new Promise((resolve, reject) => {
      this.getById(id)
        .then((product) => {
          for (let key in patch) {
            product[key] = patch[key]
          }
          resolve(product)
        })
        .catch((error) => reject(error))
    })
  }
}

module.exports = ProductStorage