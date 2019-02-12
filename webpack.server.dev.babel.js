import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';

import { common } from './src/webpack/common.babel';
import { dev } from './src/webpack/dev.babel';
import { server } from './src/webpack/server.babel';

const buildFolder = 'build/server';

const config = {
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, buildFolder),
  },
  plugins: [
    new CleanWebpackPlugin(buildFolder, {}),
  ],
};

export default merge(
  common,
  config,
  dev,
  server,
);
