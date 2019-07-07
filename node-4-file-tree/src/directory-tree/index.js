'use strict'

class DirectoryTree {
  constructor(fs) {
    if (typeof fs !== 'object' || typeof fs.readdir !== 'function') {
      throw new Error('Invalid instance of FileSystem in constructor')
    }
    this._fs = fs
  }

  getDirContent(path = '.', content = { files: [], dirs: [] }) {
    return new Promise(async (resolve, reject) => {
      try {
        const files = await this._getDirFiles(path)
        content.dirs.push(path)
        for (let item of files) {
          const filePath = `${path}/${item}`
          const stats = await this._getFileStat(filePath)
          if (stats.isFile()) {
            content.files.push(filePath)
          } else if (stats.isDirectory()) {
            content = await this.getDirContent(filePath, content)
          }
        }
        resolve(content)
      } catch (error) {
        reject(error)
      }
    })
  }

  _getDirFiles(path) {
    return new Promise((resolve, reject) => {
      this._fs.readdir(path, (error, files) => {
        if (error !== null) {
          reject(error)
          return
        }
        resolve(files)
      })
    })
  }

  _getFileStat(path) {
    return new Promise((resolve, reject) => {
      this._fs.stat(path, (error, stats) => {
        if (error !== null) {
          reject(error)
          return
        }
        resolve(stats)
      })
    })
  }
}

module.exports = DirectoryTree
