const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const frontConfig = {
  target: 'web',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json']
  },
  devServer:{
    contentBase: path.resolve(__dirname, './')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const backConfig = {
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
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
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

module.exports = [frontConfig, backConfig];