
function requestHandler(request, response) {
  response.setHeader('Content-Type', 'application/json')
  response.statusCode = 200



  switch (request.url) {
    case '/':
      responseSample(request, response)
      break
    default:
      notFound(request, response)
  }
}

function responseSample(request, response) {
  setTimeout(() => {
    console.log('send response')
    response.end(JSON.stringify({message: 'QQ'}))
  }, 100)
}

function notFound(request, response) {
  response.statusCode = 404
  response.end()
}

module.exports = requestHandler
