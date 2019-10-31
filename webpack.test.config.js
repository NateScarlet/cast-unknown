module.exports = (env, argv) => {
  const config = require('./webpack.common.config');

  // config.externals([]);
  config.module
    .rule('typescript')
    .use('babel')
    .tap(() => ({
      presets: [
        [
          '@babel/preset-env',
          { targets: { node: 'current' }, useBuiltIns: 'usage', corejs: 3 },
        ],
      ],
    }));
  return config.toConfig();
};
