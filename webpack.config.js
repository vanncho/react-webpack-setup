const path = require('path');
// webpack needs to be explicitly required
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  // Where files should be sent once they are bundled
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'js/[name].bundle.js',
    clean: true,
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    contentBase: path.join(__dirname, 'public'), // tell the server where to serve content from
    historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
    port: 3000,
    open: true,
    hot: true, // allow modules to be updated while an application is running, without a full reload
    inline: true,
    compress: true, // enable compression everything
    watchContentBase: true, // tell dev-server to watch the files
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024000
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.join(__dirname, 'src/assets', 'favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // load `moment/locale/ja.js` and `moment/locale/it.js` - reduce moment bundle
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),
    new ESLintPlugin({
      lintDirtyModulesOnly: true, // Lint only changed files, skip lint on start.
      extensions: ['tsx', 'ts'],
    }),
  ],
};
