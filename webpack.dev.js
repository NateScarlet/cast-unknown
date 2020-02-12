module.exports = (env, argv) => {
  const config = require('./webpack.common')();

  config.mode('development');
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
  if (process.env.TEST_WITHOUT_MOMENT !== '1') {
    config.externals([]);
  }
  return config.toConfig();
};
