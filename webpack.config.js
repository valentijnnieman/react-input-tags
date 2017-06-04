const path = require('path')

module.exports = {
  module: { 
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  entry: './src/components/tag-input.js',
  output: {
    filename: 'react-input-tags.js',
    path: path.resolve('./', 'dist')
  }
}
