const Config = require('webpack-chain');
const path = require('path');

module.exports = (env, argv) => {
  const config = new Config();

  config.entry('index').add('./src/index.ts');
  config.mode('development');
  config.externals(['moment']);
  config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  config.resolve.extensions.add('.ts').add('.js');
  config.module
    .rule('typescript')
    .test(/.ts$/)
    .use('babel')
    .loader('babel-loader')
    .end()
    .use('typescript')
    .loader('ts-loader')
    .end();
  return config;
};
