const generatorStream = require('./src/number-generator-stream')()

generatorStream.pipe(process.stdout)
