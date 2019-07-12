const goodsList = require('./initial-goods-list')
const { cloneDeep } = require('lodash')

class GoodsStorage {
  constructor(goodsList = []) {
    if (!Array.isArray(goodsList)) {
      throw new Error('goodsList must be Array')
    }
    this.__goodsList = cloneDeep(goodsList)
  }

  list() {
    return this.__goodsList
  }
}

module.exports = new GoodsStorage(goodsList)