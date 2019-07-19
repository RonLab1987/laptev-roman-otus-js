const jsf = require('json-schema-faker')
jsf.extend('faker', () => require('faker'))

module.exports = jsf.generate
