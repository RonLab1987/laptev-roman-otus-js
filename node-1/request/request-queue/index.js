const http = require('http')

class RequestQueue {
  constructor(url = { host: '127.0.0.1', port: 8080, path: '/'}, count = 1) {
    this._options = {
      host: url.host,
      port: url.port,
      path: url.path,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    this._count = count
  }

  promisifyRequest() {
    return new Promise((resolve, reject) => {
      const request = http.request(this._options, (incomingMessage) => {
        let data = []
        incomingMessage.on('data', (chunk) => {
          data.push(chunk)
        })
        incomingMessage.on('end', () => {
          try {
            let response = JSON.parse(Buffer.concat(data).toString())
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
        incomingMessage.on('error', (error) => {
          reject(error)
        })
      })
      request.on('error', (error) => {
        reject(error)
      })
      request.end()
    })
  }

  runAsyncRequests() {
    console.log('🚴‍♂️ Request queue run in asynchronous mode')
    console.time('Async mode finish time')
    let finished = 0
    for (let i = 0; i < this._count; i++) {
      this.promisifyRequest()
        .catch((error) => {
          console.warn(error)
        })
        .finally(() => {
          finished++
          if (finished === this._count) {
            console.log('🏆 Request queue finish: ')
            console.timeEnd('Async mode finish time')
          }
        })
    }
  }

  async runSyncRequests() {
    console.log('🚵‍♂️ Request queue run in synchronous mode')
    console.time('Sync mode finish time')
    for (let i = 0; i < this._count; i++) {
      try {
        await this.promisifyRequest()
      } catch (error) {
        console.log(error)
      }
    }
    console.log('🏅 Request queue finish: ')
    console.timeEnd('Sync mode finish time')
  }
}

module.exports = RequestQueue
