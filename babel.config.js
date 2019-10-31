module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '12.13.0',
          browsers: 'defaults',
        },
      },
    ],
  ],
};
