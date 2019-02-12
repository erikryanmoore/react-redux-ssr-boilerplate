import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';

import { client } from './src/webpack/client.babel';
import { common } from './src/webpack/common.babel';
import { dev } from './src/webpack/dev.babel';

const buildFolder = 'build/client';

const config = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, buildFolder),
  },
  plugins: [
    new CleanWebpackPlugin(buildFolder, {}),
  ],
};

export default merge(
  client,
  common,
  config,
  dev,
);
