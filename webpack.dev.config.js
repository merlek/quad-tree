const path = require('path');

module.exports = {
   entry: './example/quad-tree-app.ts',
   devtool: 'inline-source-map',
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         }
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   output: {
      filename: 'quad-tree-app.js',
      path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
   }
};
