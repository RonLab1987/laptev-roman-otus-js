const { Transform } = require('stream')
const { getRandomInt } = require('../utils')

class NumberTransformStream extends Transform {
  constructor() {
    super({ objectMode: true })
  }

  write (number) {
    if (typeof number !== 'number') {
      this.destroy(new Error('numberTransformStream input must be Number'))
    }
    this.push(number + getRandomInt())
  }
}

module.exports = NumberTransformStream
