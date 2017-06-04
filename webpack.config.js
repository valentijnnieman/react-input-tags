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
 entry: './src/gh-pages.js',		
 output: {		
   filename: 'gh-pages.js',		
   path: path.resolve('./', 'dist')		
 }		
}
