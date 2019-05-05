const fs = require('./__mocks__/fs.js')
const DirectoryTree = require('../../src/directory-tree')

describe('DirectoryTree module', () => {
  const MOCK_DIRESTORIES = [
    {
      path: 'foo',
      files: ['f1.txt', 'f2.txt']
    },
    {
      path: 'foo/bar',
      files: ['bar1.txt', 'bar2.txt']
    },
    {
      path: 'foo/bar/baz',
      files: []
    }
  ]

  const EXPECTED = {
    files: ['foo/f1.txt', 'foo/f2.txt', 'foo/bar/bar1.txt', 'foo/bar/bar2.txt'],
    dirs: ['foo', 'foo/bar', 'foo/bar/baz']
  }

  fs._setMockDirectories(MOCK_DIRESTORIES)

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

  it('method getDirContent should resolved with valid value for "foo" path', () => {
    const directoryTree = new DirectoryTree(fs)
    return expect(directoryTree.getDirContent('foo')).resolves.toEqual(
      EXPECTED
    )
  })
})
