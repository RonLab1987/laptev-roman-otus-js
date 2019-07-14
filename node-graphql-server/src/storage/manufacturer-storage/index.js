
class ManufacturerStorage {
  constructor(manufacturerList = []) {
    if (!Array.isArray(manufacturerList)) {
      throw new Error('manufacturerList must be Array')
    }
    this.__manufacturerList = manufacturerList
  }

  list() {
    return Promise.resolve(this.__manufacturerList)
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      const manufacturer = this.__manufacturerList.find(
        (item) => item.id === id
      )
      if (manufacturer === undefined) {
        return reject(new Error(`Can not find manufacturer with id ${id}`))
      }
      return resolve(manufacturer)
    })
  }
}

module.exports = ManufacturerStorage