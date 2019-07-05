const { pipeline } = require('stream')
const NumberGeneratorStream = require('./src/number-generator-stream')
const NumberTransformStream = require('./src/number-transform-stream')
const NumberOutputStream = require('./src/number-output-stream')

const readableStream = new NumberGeneratorStream()
const transformStream = new NumberTransformStream()
const outputStream = new NumberOutputStream()

pipeline(
  readableStream,
  transformStream,
  outputStream,
  (error) => {
    if (error) {
      console.error(error)
      process.exit()
    }
  }
)
