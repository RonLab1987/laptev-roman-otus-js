const fs = require('fs')

class DirectoryTree {
  constructor () {}

  getDirectoryTreeByPath(path = '.') {
    return new Promise((resolve, reject) => {
      // console.log('path: ', path)
      fs.readdir(path, (error, response) => {
        if (error !== null) {
          // console.warn('error: ', error)
          reject(error)
          return
        }
        // console.log('response: ', response)
        resolve(response)
      })
    })
  }
}

module.exports = DirectoryTree
