const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV;
process.env.BABEL_ENV = ENV;

const config = {
  mode: ENV || 'production',
  entry: './src/index.js',
  output: {
    filename: 'drizzle-react.js',
    library: 'drizzle-react',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader',
      include: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  externals: [
    'drizzle',
    'prop-types',
    'react',
    'redux'
  ]
};

switch (ENV) {
  case 'production':
    config.devtool = false;
    config.optimization = { minimize: true };
    break;
  case 'development':
    config.devtool = 'source-map';
    break;
  case 'test':
    config.devtool = 'source-map';
    delete config.entry;
    break;
  default:
    break;
}

module.exports = config;
