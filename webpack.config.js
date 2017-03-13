var webpack = require('webpack');

module.exports = {
  entry: {
    js: './src/index.js',
    html: './src/index.html',
  },
  output: {
    path: `${__dirname}/out`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './',
    port: 3333,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','react-hmre'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.jpg$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.png$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'file?name=[name].[ext]',
      }
    ],
  },
  resolve: {
    modulesDirectories: ['node_modules', './src', './src/styles/', './'],
    extensions: ['', '.js', '.styl', ',html', 'json']
  },
};
