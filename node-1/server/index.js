const env = require('../env.json')
const HttpServer = require('./http-server')
const requestHandler = require('./request-handler')

const server = new HttpServer(env.port, requestHandler)
