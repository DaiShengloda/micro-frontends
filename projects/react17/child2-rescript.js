module.exports = [
    [
      'use-babel-config',
      {
        presets: ['react-app'],
        plugins: [
          'react-require',
          [
            'module-resolver',
            {
              root: '.',
              alias: {
                '~': './src',
              },
            },
          ],
        ],
      },
    ],
    [
      'use-eslint-config',
      {
        extends: ['react-app'],
        plugins: ['ramda'],
        rules: {
          'ramda/compose-pipe-style': 'error',
          'react/react-in-jsx-scope': 0,
        },
      },
    ],
  ]
  