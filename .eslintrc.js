module.exports = {

  extends: [
    'react-app',
    'react-app/jest',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  //   parser: 'babel-eslint',
  //   plugins: ['react', 'jsx-a11y', 'import'],

  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
    // 'react/jsx-filename-extension': 0,

    

    // airbnb: 0,
    // 'react/prefer-stateless-function': 0,
    // 'react/jsx-filename-extension': 0,
    // 'react/jsx-one-expression-per-line': 0,

    // 'linebreak-style': 0,
    // 'no-console': 'off',
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
    //     message: 'Unexpected property on console object was called',
    //   },
    // ],
    // 'react/jsx-props-no-spreading': 0,
    // 'max-len': 0,
    // 'no-unused-vars': 0,
    // 'no-use-before-define': 0,
    // 'react/no-array-index-key': 0,
    // 'import/prefer-default-export': 'off',
    // 'react/jsx-fragments': 'off',
    // 'react/button-has-type': 'off',
    // 'react/state-in-constructor': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'react/prop-types': 'off',
    // 'no-underscore-dangle': 'off',

  },

};
