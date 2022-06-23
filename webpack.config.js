const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: {
    public: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    publicPath: process.env.PUBLIC_PATH,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '@/src': path.resolve(__dirname, 'src'),
      '@/assets': path.resolve(__dirname, 'assets'),
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.(jpe?g|png|svg)$/i,
        exclude: /node_modules/,
        include: /assets\/images/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][name][ext]',
        },
      }, {
        test: /\.(ttf|otf)/i,
        exclude: /node_modules/,
        include: /assets\/fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][name][ext]',
        },
      }, {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        // exclude: /node_module/,
      }, {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        // exclude: /node_module/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['public'],
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:11000',
        changeOrigin: true,
      },
    },
  },
};
