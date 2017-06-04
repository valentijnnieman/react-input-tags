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
  entry: './src/main.js',
  output: {
    filename: 'email_tags.js',
    path: path.resolve('./', 'dist')
  }
}
