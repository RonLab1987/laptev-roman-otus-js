const { cloneDeep } = require('lodash')

class ProductStorage {
  constructor(productList = []) {
    if (!Array.isArray(productList)) {
      throw new Error('goodsList must be Array')
    }
    this.__productList = cloneDeep(productList)
  }

  list(args) {
    console.log('args: ', args)
    return Promise.resolve(
      this.__productList
    )
  }
}

module.exports = ProductStorage