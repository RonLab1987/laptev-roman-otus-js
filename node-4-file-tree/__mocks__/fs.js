'use strict'

const path = require('path')
const fs = jest.genMockFromModule('fs')

class DirentSimpleMock {
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

function _makeMockDirectories(directoryPath) {
  let parentPath = ''
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
        new DirentSimpleMock(path.basename(currentDirectoryName), true)
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
    directories[directoryPath].push(new DirentSimpleMock(fileName))
  }
}

function _makeDirectory(directory) {
  if (
    directory === undefined ||
    typeof directory.path !== 'string' ||
    directory.path === '' ||
    !Array.isArray(directory.files)
  ) {
    throw new Error('Not valid directory object')
  }
  _makeMockDirectories(directory.path)
  _makeMockFiles(directory.path, directory.files)
}

function _setMockDirectories(mockDirectories = []) {
  if (!Array.isArray(mockDirectories)) {
    throw new Error('mockDirectories must be Array')
  }
  directories = {}
  for (let directory of mockDirectories) {
    _makeDirectory(directory)
  }
  // console.dir(directories)
}

function _readdir (path, callback) {
  if (directories[path] === undefined) {
    callback(new Error('Has not directory'), undefined)
    return
  }
  callback(null, directories[path].map(item => item.name))
}

fs._setMockDirectories = _setMockDirectories
fs.readdir = _readdir

module.exports = fs
