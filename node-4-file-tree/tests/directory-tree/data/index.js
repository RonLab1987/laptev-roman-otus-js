const files = [
  {
    name: 'foo',
    files: [
      {
        name: 'f1.txt'
      },
      {
        name: 'f2.txt'
      },
      {
        name: 'bar',
        files: [
          {
            name: 'bar1.txt'
          },
          {
            name: 'bar2.txt'
          },
          {
            name: 'baz',
            files: []
          }
        ]
      }
    ]
  }
]

const expected = [
  {
    path: 'foo',
    result: {
      files: ['foo/f1.txt', 'foo/f2.txt', 'foo/bar/bar1.txt', 'foo/bar/bar2.txt'],
      dirs: ['foo', 'foo/bar', 'foo/bar/baz']
    }
  },
  {
    path: 'foo/bar',
    result: {
      files: ['foo/bar/bar1.txt', 'foo/bar/bar2.txt'],
      dirs: ['foo/bar', 'foo/bar/baz']
    }
  },
  {
    path: 'foo/bar/baz',
    result: {
      files: [],
      dirs: ['foo/bar/baz']
    }
  }
]

module.exports = {
  files,
  expected
}