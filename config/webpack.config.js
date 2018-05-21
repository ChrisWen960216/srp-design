const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    entry: path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../src'),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif|ttf|ttc)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      minify: {
        removeAttributeQuotes: true,
      },
      hash: true,
      template: './src/index.html',
    }),
  ],
  devServer: {
    // 设置基本目录结构
    contentBase: path.join(__dirname, '../src'),
    // 服务器的IP地址，可以使用IP也可以使用localhost
    host: '0.0.0.0',
    // 服务端压缩是否开启
    compress: true,
    // 配置服务端口号
    port: 1717,
  },
};
