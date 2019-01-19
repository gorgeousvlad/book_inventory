const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: {
    app: ['./server/index.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, "server"),
    filename: "bundle.js"
  },
  externals: [nodeExternals()],
};
