const { Readable } = require('stream')
const { getRandomInt } = require('../utils')

function init() {
  const stream = new Readable({
    read: (size) => {}
  })
  function sendRandomInt() {
    setTimeout(() => {
      stream.push(getRandomInt().toString())
      sendRandomInt()
    }, 300)
  }
  sendRandomInt()
  return stream
}

module.exports = init
