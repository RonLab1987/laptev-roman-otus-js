const http = require('http')

class HttpServerSample {
  constructor(port = 8080, requestHandler = () => {}) {
    this._server = http.createServer(requestHandler)
    this._server.listen(port, '0.0.0.0', () => {
      console.log(`Start HttpServerSample at ${port}`)
    })
  }
}

module.exports = HttpServerSample
