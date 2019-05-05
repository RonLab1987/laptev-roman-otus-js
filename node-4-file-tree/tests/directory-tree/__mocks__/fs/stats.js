class Stats {
  constructor(name = '', isDirectory = false) {
    this._name = name
    this._isDirectory = isDirectory
  }

  get name() {
    return this._name
  }

  isFile() {
    return !this._isDirectory
  }

  isDirectory() {
    return this._isDirectory
  }
}

module.exports = Stats
