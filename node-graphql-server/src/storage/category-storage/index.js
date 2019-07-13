const { cloneDeep } = require('lodash')

class CategoryStorage {
  constructor(categoryList = []) {
    if (!Array.isArray(categoryList)) {
      throw new Error('categoryList must be Array')
    }
    this.__categoryList = cloneDeep(categoryList)
  }

  list() {
    return Promise.resolve(this.__categoryList)
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      const manufacturer = this.__categoryList.find(
        (item) => item.id === id
      )
      if (manufacturer === undefined) {
        return reject(new Error(`Can not find category with id ${id}`))
      }
      return resolve(manufacturer)
    })
  }
}

module.exports = CategoryStorage