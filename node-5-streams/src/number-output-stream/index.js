const { Writable } = require('stream')

class NumberOutputStream extends Writable {
  constructor() {
    super({ objectMode: true })
  }

  write (chunk) {
    if (typeof chunk !== 'number') {
      this.destroy(new Error('numberOutputStream input must be Number'))
    }
    console.log(chunk)
  }
}

module.exports = NumberOutputStream
