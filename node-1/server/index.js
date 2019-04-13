const Path = require('path')
require('dotenv').config({
  path: Path.join(__dirname, '../.env')
})
const HttpServer = require('./http-server')
const requestHandler = require('./request-handler')

const server = new HttpServer(process.env.HTTP_SERVER_PORT, requestHandler)
