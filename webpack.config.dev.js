import path from 'path';
import webpack from 'webpack';

// This shit is broken rn need to set up modern webpack and babel

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
