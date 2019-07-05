const { Readable } = require('stream')
const { getRandomInt } = require('../utils')

class NumberGeneratorStream extends Readable {
  constructor() {
    super({ objectMode: true })
    setInterval(() => this._pushNumber(), 400)
  }

  _read(size) {}

  _pushNumber() {
    this.push(getRandomInt())
  }
}

module.exports = NumberGeneratorStream
