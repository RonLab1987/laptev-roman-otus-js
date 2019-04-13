const Path = require('path')
require('dotenv').config({
  path: Path.join(__dirname, '../.env')
})
const HttpServerSample = require('./http-server')
const requestHandler = require('./request-handler')

const server = new HttpServerSample(process.env.HTTP_SERVER_PORT, requestHandler)
