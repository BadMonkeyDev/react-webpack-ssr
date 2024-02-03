import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import dotenv from 'dotenv';
import { BuildOptions } from './types';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const {
    isDev, paths, apiUrl,
  } = options;
  const isProd = !isDev;
  const result: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
      __API__: JSON.stringify(process.env.API_URL || apiUrl),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ];
  if (isDev) {
    result.push(new ReactRefreshWebpackPlugin());
    result.push(new webpack.HotModuleReplacementPlugin());
  }

  if (isProd) {
    result.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
  }

  return result;
};
