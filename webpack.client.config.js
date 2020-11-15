const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
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
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
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
