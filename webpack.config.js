const path = require('path');

module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle-test.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // chunkFilename: '[name].[chunkhash].js'
  },  
};