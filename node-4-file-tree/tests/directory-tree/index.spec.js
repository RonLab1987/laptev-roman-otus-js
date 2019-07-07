
const FS = require('./__mocks__/fs')
const data = require('./data')
const DirectoryTree = require('../../src/directory-tree')

const fs = new FS(data.files)

describe('DirectoryTree module', () => {
  it('should init', () => {
    const directoryTree = new DirectoryTree(fs)
    expect(directoryTree).toBeInstanceOf(DirectoryTree)
  })

  it('method getDirContent should reject by invalid path "./invalid-path"', () => {
    const directoryTree = new DirectoryTree(fs)
    return expect(
      directoryTree.getDirContent('./invalid-path')
    ).rejects.toBeInstanceOf(Error)
  })

  for (let item of data.expected) {
    it(`method getDirContent should resolved with valid value for "${item.path}" path`, () => {
      const directoryTree = new DirectoryTree(fs)
      return expect(directoryTree.getDirContent(item.path)).resolves.toEqual(item.result)
    })
  }
})
