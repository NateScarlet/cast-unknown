module.exports = (env, argv) => {
  const config = require('./webpack.common.config');
  config.output.library('castUnknown').libraryTarget('umd');
  return config.toConfig();
};
