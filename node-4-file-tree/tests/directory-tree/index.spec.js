jest.mock('fs')

const fs = require('fs')
const DirectoryTree = require('../../src/directory-tree')

describe('DirectoryTree module', () => {
  const MOCK_DIRESTORIES = [
    {
      path: './foo',
      files: ['f1.txt', 'f2.txt']
    },
    {
      path: './foo/bar',
      files: ['f1.txt', 'f2.txt']
    },
    {
      path: './foo/bar/baz',
      files: []
    }
  ]

  beforeEach(() => {
    fs._setMockDirectories(MOCK_DIRESTORIES)
  })

  it('should should init', () => {
    const directoryTree = new DirectoryTree()
    expect(directoryTree).toBeInstanceOf(DirectoryTree)
  })

  it('method getDirectoryTreeByPath should reject by invalid path "./invalid-path"', () => {
    const directoryTree = new DirectoryTree()
    return expect(directoryTree.getDirectoryTreeByPath('./invalid-path'))
      .rejects
      .toBeInstanceOf(Error)
  })

  it('method getDirectoryTreeByPath should resolve by valid path "./foo"', () => {
    const directoryTree = new DirectoryTree()
    return expect(directoryTree.getDirectoryTreeByPath('./foo'))
      .resolves
      .toEqual(['f1.txt', 'f2.txt', 'bar'])
  })
})