const Path = require('path')
require('dotenv').config({
  path: Path.join(__dirname, '../.env')
})
const http = require('http')

const requestOptions = {
  host: process.env.HTTP_SERVER_HOST,
  port: process.env.HTTP_SERVER_PORT,
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const request = http.request(requestOptions, (response) => {
  response.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
})

request.end()
