import { defineConfig } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    {
      file: 'dist/index.umd.js',
      name: 'castUnknown',
      format: 'umd',
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.min.js',
      name: 'castUnknown',
      format: 'umd',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      dir: 'dist',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  input: 'src/index.ts',
  external: [/@babel\/runtime/],
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'runtime',
    }),
  ],
});
