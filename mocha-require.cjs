require('ts-node').register({
  transpileOnly: true,
  files: true,
});
require('@babel/register')({
  extensions: ['.ts', '.js', '.tsx', '.jsx', '.es6', '.es', '.mjs'],
  root: __dirname,
});

process.env.NODE_ENV = 'test';
