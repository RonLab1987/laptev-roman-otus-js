const env = require('../env.js')
const RequestQueue = require('./request-queue')

const arg = process.argv.slice(2)
const requestsCount = isNaN(Number(arg[0])) ? 1 : Number(arg[0])
const mode = ['sync', 'async'].includes(arg[1]) ? arg[1] : 'async'

const requestQueue = new RequestQueue(
  {
    host: env.host,
    port: env.port,
    path: '/'
  },
  requestsCount
)

if (mode === 'async') {
  requestQueue.runAsyncRequests(requestsCount)
} else if (mode === 'sync') {
  requestQueue.runSyncRequests(requestsCount)
}
