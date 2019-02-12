import nodeExternals from 'webpack-node-externals';

export const server = {
  entry: ['@babel/polyfill', './src/server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
};
