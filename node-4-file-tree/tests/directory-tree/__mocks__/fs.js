'use strict'

const path = require('path')

class StatsMock {
  constructor(name = '', isDirectory = false) {
    this._name = name
    this._isDirectory = isDirectory
  }

  get name() {
    return this._name
  }

  isFile() {
    return !this._isDirectory
  }

  isDirectory() {
    return this._isDirectory
  }
}

let directories = {}

function _setMockDirectories(mockDirectories = []) {
  directories = {}
  for (let directory of mockDirectories) {
    _makeMockDirectories(directory.path)
    _makeMockFiles(directory.path, directory.files)
  }
  console.dir(directories)
}

function _makeMockDirectories(directoryPath) {
  let parentPath = '. '
  let currentDirectoryName = directoryPath
  do {
    parentPath = path.dirname(currentDirectoryName)
    if (directories[parentPath] === undefined) {
      directories[parentPath] = []
    }
    if (
      directories[parentPath].find(
        (dirent) =>
          dirent.isDirectory() &&
          dirent.name === path.basename(currentDirectoryName)
      ) === undefined
    ) {
      directories[parentPath].push(
        new StatsMock(path.basename(currentDirectoryName), true)
      )
    }
    currentDirectoryName = parentPath
  } while (parentPath !== '.')

  if (directories[directoryPath] === undefined) {
    directories[directoryPath] = []
  }
}

function _makeMockFiles(directoryPath, files) {
  for (let fileName of files) {
    directories[directoryPath].push(new StatsMock(fileName))
  }
}

function _readdir(path, callback) {
  if (directories[path] === undefined) {
    callback(new Error('Has not directory'), undefined)
    return
  }
  callback(null, directories[path].map((item) => item.name))
}

function _stat(filePath, callback) {
  const dirname = path.dirname(filePath)
  const basename = path.basename(filePath)
  if (directories[dirname] === undefined) {
    callback(new Error('ENOENT: no such file or directory'), undefined)
    return
  }
  const stats = directories[dirname].find((item) => item.name === basename)
  if (stats === undefined) {
    callback(new Error('ENOENT: no such file or directory'), undefined)
    return
  }
  callback(null, stats)
}

module.exports = {
  _setMockDirectories: _setMockDirectories,
  readdir: _readdir,
  stat: _stat
}
