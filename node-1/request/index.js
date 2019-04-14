const Path = require('path')
require('dotenv').config({
  path: Path.join(__dirname, '../.env')
})
const RequestQueue = require('./request-queue')

const arg = process.argv.slice(2)
const requestsCount = isNaN(Number(arg[0])) ? 1 : Number(arg[0])
const mode = ['sync', 'async'].includes(arg[1]) ? arg[1] : 'async'

const requestQueue = new RequestQueue(
  {
    host: process.env.HTTP_SERVER_HOST,
    port: process.env.HTTP_SERVER_PORT,
    path: '/'
  },
  requestsCount
)

if (mode === 'async') {
  requestQueue.runAsyncRequests(requestsCount)
} else if (mode === 'sync') {
  requestQueue.runSyncRequests(requestsCount)
}
