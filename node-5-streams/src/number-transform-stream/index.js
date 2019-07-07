const { Transform } = require('stream')
const { getRandomInt } = require('../utils')

class NumberTransformStream extends Transform {
  constructor() {
    super({ objectMode: true })
  }

  _transform (chunk, encoding, callback) {
    if (typeof chunk !== 'number') {
      this.destroy(new Error('numberTransformStream input must be Number'))
    }
    callback(null, chunk + getRandomInt())
  }
}

module.exports = NumberTransformStream
