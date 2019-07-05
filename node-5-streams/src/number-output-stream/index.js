const { Writable } = require('stream')

class NumberOutputStream extends Writable {
  constructor() {
    super({ objectMode: true })
  }

  write (number) {
    if (typeof number !== 'number') {
      this.destroy(new Error('numberOutputStream input must be Number'))
    }
    console.log(number)
  }
}

module.exports = NumberOutputStream
