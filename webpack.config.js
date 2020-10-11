
const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader?url=false',
            'sass-loader',
         ]
      },
      {
         test: /\.(png|svg|jpe?g|gif)$/,
         use: [
             {
               loader: 'file-loader',
             },
         ],
     },
     {
      test: /\.(ttf|woff|woff2|eot|otf)$/,
      loader: 'file-loader',
      options: {name: "[name].[ext]"},
   }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};