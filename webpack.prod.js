const createConfig = require('./webpack.common');
module.exports = (env, argv) => {
  const nodeConfig = createConfig();
  nodeConfig.target('node');
  nodeConfig.output.filename('index.node.js');

  const webConfig = createConfig();
  webConfig.output.library('castUnknown').libraryTarget('umd');

  return [nodeConfig.toConfig(), webConfig.toConfig()];
};
