const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx', '.css']
  },
  module: {
    preLoaders:[
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint',
        include: path.join(__dirname, 'src')
      }      
    ],
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        loaders: ['babel', 'ts'],
        include: path.join(__dirname, 'src')
      },
			{ test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css?modules'
        ]
      }
      ]
  }
};
