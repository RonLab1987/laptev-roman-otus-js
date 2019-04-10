const Path = require('path')
require('dotenv').config({
  path: Path.join(__dirname, '../.env')
})

const http = require('http')

const httpServer = http.createServer((request, response) => {
  if (request.url !== '/') {
    response.statusCode = 404
    response.end()
    return
  }
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  setTimeout(() => {
    console.log('send response')
    response.end(JSON.stringify({message: 'QQ'}))
  }, 100)
})

httpServer.listen(process.env.HTTP_SERVER_PORT, '0.0.0.0', () => {
  console.log(`Start http server at ${process.env.HTTP_SERVER_PORT}`)
})
