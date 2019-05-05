'use strict'

const path = require('path')
const Stats = require('./stats')

class FS {
  constructor(files = [], parentPath = '') {
    if (!Array.isArray(files)) {
      throw new Error('files must be array')
    }
    this._error = new Error('ENOENT: no such file or directory')
    this._dirs = new Map()
    this._stats = new Map()
    this._init(parentPath, files)
  }

  _init(parentPath, files) {
    this._dirs.set(parentPath, files.map((item) => item.name))
    for (let item of files) {
      const itemPath = path.join(parentPath, item.name)
      const stats = new Stats(item.name, Array.isArray(item.files))
      this._stats.set(itemPath, stats)
      if (Array.isArray(item.files)) {
        this._init(itemPath, item.files)
      }
    }
  }

  readdir(path, callback) {
    if (!this._dirs.has(path)) {
      callback(this._error, undefined)
      return
    }
    callback(null, this._dirs.get(path))
  }

  stat(path, callback) {
    if (!this._stats.has(path)) {
      callback(this._error, undefined)
      return
    }
    callback(null, this._stats.get(path))
  }
}

module.exports = FS
