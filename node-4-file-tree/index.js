'use strict'

const fs = require('fs')
const DirectoryTree = require('./src/directory-tree')

const arg = process.argv.slice(2)
const path = arg[0] ? arg[0] : '.'

const directoryTree = new DirectoryTree(fs)

directoryTree.getDirContent(path)
  .then((response) => { console.dir(response) })
  .catch((error) => { console.error(error) })
